import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";

const inter = Mukta({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Tunify Music Player",
  description: "A bug free music player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
