import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pacific Capital | Professional Trading Platform",
  description: "Trade stocks, crypto, forex, and commodities with enterprise-grade security and advanced charting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground text-sm`}>
        {/* Global Navigation could go here, or handled per page */}
        {children}
      </body>
    </html>
  );
}
