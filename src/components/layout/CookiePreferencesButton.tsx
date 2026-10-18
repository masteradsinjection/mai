"use client";

import React from "react";

export function CookiePreferencesButton() {
  const handleOpen = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("mai_open_cookie_preferences"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleOpen}
      className="hover:text-white transition-colors cursor-pointer text-xs text-slate-400"
    >
      Cookie Preferences
    </button>
  );
}
