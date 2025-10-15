import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Bookmark Manager | Dirk Brandon Lapitan",
  description: "A fully-functional bookmark manager with add, edit, archive, search, and filter features. Created by Dirk Brandon Lapitan as part of a Frontend Mentor challenge."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={manRope.variable}
      >
        {children}
      </body>
    </html>
  );
}
