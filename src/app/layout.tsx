import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Cao Chi Hai",
    default: "Cao Chi Hai - Software engineer",
  },
  description: "Hi, I am Cao Chi Hai",
  // TODO: explore what is it
  // alternates: {
  //   types: {
  //     "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-900">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
