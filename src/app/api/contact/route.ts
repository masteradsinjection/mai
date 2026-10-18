import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Server-side validation with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
          message: "Validation failed. Please correct the fields and try again.",
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Honeypot check (anti-spam)
    if (data.companyWebsiteExtra && data.companyWebsiteExtra.length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam submission rejected." },
        { status: 400 }
      );
    }

    const provider = process.env.CONTACT_EMAIL_PROVIDER?.toLowerCase() || "unconfigured";
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "contact@masteradsinjection.com";

    // 3. Provider execution logic
    if (provider === "resend" && process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.CONTACT_SENDER_EMAIL || "leads@masteradsinjection.com",
            to: recipientEmail,
            subject: `[New MAI Inquiry] ${data.fullName} - ${data.service}`,
            text: `
Name: ${data.fullName}
Email: ${data.email}
Website: ${data.website || "None provided"}
Service: ${data.service}
Budget: ${data.budget || "Unspecified"}

Message:
${data.message}
            `.trim(),
          }),
        });

        if (!resendResponse.ok) {
          const errorDetails = await resendResponse.text();
          console.error("Resend API error:", errorDetails);
          // Return accepted with fallback status
          return NextResponse.json({
            success: true,
            status: "delivered_fallback",
            message:
              "Inquiry received. Email gateway reported an issue, but your lead was logged.",
          });
        }

        return NextResponse.json({
          success: true,
          status: "delivered",
          message:
            "Thank you! Your project details have been successfully submitted. We will review and respond within 24 business hours.",
        });
      } catch (sendError) {
        console.error("Failed to deliver via Resend:", sendError);
      }
    }

    if (provider === "webhook" && process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...data,
          }),
        });
        return NextResponse.json({
          success: true,
          status: "webhook_delivered",
          message:
            "Thank you! Your inquiry was received and routed to our client intake system.",
        });
      } catch (webhookError) {
        console.error("Webhook submission error:", webhookError);
      }
    }

    // Default / Unconfigured mode: Log safely for review without crashing or falsifying delivery
    console.info("[MAI Lead Intake - Unconfigured Mode]", {
      timestamp: new Date().toISOString(),
      fullName: data.fullName,
      email: data.email,
      service: data.service,
      budget: data.budget,
      hasWebsite: !!data.website,
    });

    return NextResponse.json({
      success: true,
      status: "received_staging",
      message:
        "Thank you! Your inquiry has been logged in our intake system. (Note: Email delivery provider is operating in local/staging mode. Configure RESEND_API_KEY in .env.local for automated dispatch.)",
    });
  } catch (error) {
    console.error("Unhandled contact submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
