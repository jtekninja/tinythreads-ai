import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "@/styles/globals.css";

export const viewport: Viewport = {
  themeColor: "#8B5CF6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "TinyThreads AI — AI Shopping for Growing Kids",
    template: "%s | TinyThreads AI",
  },
  description:
    "AI-powered kids clothing marketplace. Swipe, bid, and shop with your personal AI parenting assistant. Stop wasting hours shopping for kids clothes.",
  keywords: [
    "kids clothing",
    "children's clothes",
    "AI shopping",
    "parenting",
    "auction",
    "baby clothes",
    "toddler clothes",
    "TinyThreads",
  ],
  authors: [{ name: "TinyThreads AI" }],
  creator: "TinyThreads AI",
  publisher: "JTekNinja AI Systems",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "TinyThreads AI",
    title: "TinyThreads AI — AI Shopping for Growing Kids",
    description:
      "AI-powered kids clothing marketplace. Swipe, bid, and shop with your personal AI parenting assistant.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/branding/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TinyThreads AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TinyThreads AI",
    description: "AI shopping for growing kids.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/branding/og-image.png`],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/branding/favicon.ico",
    apple: "/branding/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-brand-white text-brand-indigo antialiased">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1E1B4B",
              color: "#FAFAFC",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "16px",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
