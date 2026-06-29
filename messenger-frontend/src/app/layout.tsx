import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple messenger app",
  description: "A simple messenger app built with Next.js, NestJS, and Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased font-mono`}
    >
      <body className="min-h-screen">
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
