import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dupevoid.net"),
  title: "Dvoid — Each Drop Changes the Plan",
  description: "A custom Minecraft void-survival server with random drops, dungeons, and a daily-resetting world.",
  openGraph: { title: "Dvoid — Each Drop Changes the Plan", description: "A custom Minecraft void-survival server with random drops, dungeons, and a daily-resetting world.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dvoid — Random drops, dungeons, and a daily Verge." }] },
  twitter: { card: "summary_large_image", title: "Dvoid — Each Drop Changes the Plan", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
