import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Starfield } from "@/components/starfield";
import { PostHogProvider } from "@/components/posthog-provider";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://promptlings.ai"),
  title: "Promptlings — AI Literacy for Kids",
  description:
    "Promptlings teaches kids ages 8-16+ to be AI creators, not just consumers. Live classes, small groups, safety-first. Join the waitlist.",
  openGraph: {
    title: "Promptlings — AI Literacy for Kids",
    description:
      "Promptlings teaches kids ages 8-16+ to be AI creators, not just consumers. Live classes, small groups, safety-first.",
    type: "website",
    url: "https://promptlings.ai",
    siteName: "Promptlings",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Promptlings — AI Literacy for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promptlings — AI Literacy for Kids",
    description:
      "Promptlings teaches kids ages 8-16+ to be AI creators, not just consumers.",
    images: ["/img/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <PostHogProvider>
          <div className="scanlines" />
          <Starfield />
          {/* Nebula blobs */}
          <div className="fixed w-[600px] h-[600px] rounded-full bg-violet blur-[120px] opacity-12 pointer-events-none z-0 -top-[10%] -right-[10%]" />
          <div className="fixed w-[500px] h-[500px] rounded-full bg-coral blur-[120px] opacity-12 pointer-events-none z-0 bottom-[20%] -left-[15%]" />
          <div className="fixed w-[400px] h-[400px] rounded-full bg-mint blur-[120px] opacity-7 pointer-events-none z-0 top-[50%] right-[20%]" />
          <Navigation />
          <main className="relative z-2">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
