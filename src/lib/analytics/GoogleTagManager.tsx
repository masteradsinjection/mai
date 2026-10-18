"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getStoredConsent } from "./tracker";

export function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    // Only load if GTM ID is provided and user has given analytics consent
    const consent = getStoredConsent();
    if (gtmId && consent.analytics) {
      setCanLoad(true);
    }

    const handleConsentChange = () => {
      const updated = getStoredConsent();
      if (gtmId && updated.analytics) {
        setCanLoad(true);
      }
    };

    window.addEventListener("mai_consent_updated", handleConsentChange);
    return () => {
      window.removeEventListener("mai_consent_updated", handleConsentChange);
    };
  }, [gtmId]);

  if (!gtmId || !canLoad) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'dataLayer','${gtmId}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
