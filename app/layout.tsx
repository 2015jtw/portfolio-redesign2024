import type { Metadata } from "next";
import { Inter, Alegreya } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { getHeroData } from '@/sanity/lib/data';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

const alegreya = Alegreya({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-alegreya",
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: "JW Portfolio",
  description: "Designed and developed this NextJS app for my portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const heroData = await getHeroData();
  const socialMedia = heroData?.socialMedia || [];
  const resume = heroData?.resume;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${alegreya.variable} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar socialMedia={socialMedia} resume={resume} />
          <main>{children}</main>
          <Footer socialMedia={socialMedia} />
        </ThemeProvider>
      </body>
    </html>
  );
}
