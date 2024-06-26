import "@/style/globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Core } from "@/script/utility/metadata";
import { cn } from "@/script/utility/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...Core(
    {
      template: "%s | Sofa Machabba Haeta",
      default: "Sofa Machabba Haeta",
    },
    "Generated by create next app",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased scrollbar-w-2 scrollbar-thumb-rounded-full scrollbar-thumb-zinc-500 scrollbar-track-transparent"
    >
      <body
        className={cn(
          "flex h-full flex-col transition-all duration-500 min-h-screen bg-background text-foreground font-sans antialiased",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
