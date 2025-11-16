"use client";

import Script from "next/script";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </>
  );
}