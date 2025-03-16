import type React from "react";

import { Suspense } from "react";
import "@/app/globals.css";
import { Inter, Sankofa_Display as SF_Pro_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

// Use SF Pro Display for macOS feel (only weight 400 is available)
const sfPro = SF_Pro_Display({
  subsets: ["latin"],
  variable: "--font-sf-pro",
  weight: ["400"], // removed unsupported weights
  preload: true,
  display: "swap",
});

// Fallback to Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  preload: true,
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          sfPro.variable,
          inter.variable
        )}
      >
        <ThemeProvider defaultTheme="system" storageKey="vikash-theme">
          <Navbar />
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                Loading...
              </div>
            }
          >
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  generator: "v0.dev",
};
