import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michkoff | Portfolio",
  icons: [
    {
      rel: "icon",
      url: "/brand/m.svg",
    },
  ],
  description:
    "Евгений Мичков - Fullstack разработчик с особым подходом к своему делу",
  openGraph: {
    title: "Michkoff | Portfolio",
    description:
      "Евгений Мичков - Fullstack разработчик с особым подходом к своему делу",
    type: "website",
    url: "https://michkoff.com",
    images: [
      {
        url: "https://michkoff.com/open-graph-banner.png",
        width: 1200,
        height: 630,
        alt: "Michkoff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michkoff | Portfolio",
    images: [
      {
        url: "https://michkoff.com/open-graph-banner.png",
        width: 1200,
        height: 630,
        alt: "Michkoff",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/brand/m.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
