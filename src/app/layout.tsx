import type { Metadata, Viewport } from "next";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kunal | Full-Stack Engineer & Systems Builder",
  description:
    "Portfolio of Kunal, Full-Stack Developer specializing in distributed systems, modern web apps, and resilient cloud architecture.",
};

export const viewport: Viewport = {
  themeColor: "#EBF3F6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "light" }}>
      <body className="min-h-dvh bg-ice-canvas text-ocean-900 antialiased selection:bg-aqua selection:text-ocean-950">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
