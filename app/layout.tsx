import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CyberHopeAI - Powering Industries, One Skill at a Time",
  description: "We build AI with practical skills, creating a future where technology empowers human potential and drives industrial progress. This is the new era of intelligent automation.",
  keywords: ["AI", "artificial intelligence", "automation", "technology", "industrial AI", "machine learning"],
  authors: [{ name: "CyberHopeAI" }],
  creator: "CyberHopeAI",
  publisher: "CyberHopeAI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cyberhopeai.com",
    title: "CyberHopeAI - Powering Industries, One Skill at a Time",
    description: "We build AI with practical skills, creating a future where technology empowers human potential and drives industrial progress.",
    siteName: "CyberHopeAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberHopeAI - Powering Industries, One Skill at a Time",
    description: "We build AI with practical skills, creating a future where technology empowers human potential and drives industrial progress.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased font-sans bg-[#0D0F13] text-white">
        <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
          {/* Background Video - Temporarily disabled */}
          {/* <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-5"
          >
            <source 
              src="https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_25fps.mp4" 
              type="video/mp4" 
            />
          </video> */}
          
          {/* Background Gradient */}
          <div className="fixed inset-0 bg-gradient-to-b from-[#0D0F13] via-[#0D0F13]/90 to-[#0D0F13] z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

