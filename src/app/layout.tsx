import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MehnatKash Enterprise | AI-Powered Service Marketplace",
  description: "Connect with vetted service professionals instantly using advanced AI matchmaking and absolute transparency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen selection:bg-primary selection:text-primary-foreground`}
      >
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
