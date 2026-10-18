"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error captured:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-slate-50">
      <Container size="narrow" className="text-center">
        <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-6 border border-red-100">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Something Interrupted This Request
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed">
          An unexpected error occurred while rendering this page. Our technical team has been notified. You can retry loading or return to the main site.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={() => reset()} size="lg">
            <RefreshCw className="w-4 h-4 mr-1.5" /> Try Again
          </Button>
          <Button href="/" variant="outline" size="lg">
            <Home className="w-4 h-4 mr-1.5" /> Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
