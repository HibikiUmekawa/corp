import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import Header from "@/components/header";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="light" lang="jp">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-white font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            enableSystem: false,
            forcedTheme: "light",
          }}
        >
          <div className="relative flex flex-col h-screen">
            <Header />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow bg-white">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
