import type { Metadata } from "next";
import { Lora } from 'next/font/google';
import "./globals.css";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuan's Links",
  description: "Links to my social media and other online presences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
