"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, session }) {
  // console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
      <Script src="/home/doduy/nextauthtest/src/script/script.js"></Script>
    </html>
  );
}
