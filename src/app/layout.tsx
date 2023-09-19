import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./styles.module.css";

import { Noto_Sans_JP } from "next/font/google";

const notoSansJpFont = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js template!",
  description: "これはNext,js13のテンプレートです",
  authors: { name: "daimyo404", url: "https://github.com/daimyo404" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansJpFont.className}>
        <p>これはroot</p>
        {children}
        {/* {children} */}
      </body>
    </html>
  );
}
