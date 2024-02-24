import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhupesh Singh Chauhan's portfolio",
  description: "The portfolio of the Bhupesh Singh Chauhan which represents the journal and business of this indiviual develop",
  icons: {
    icon: "/bcfav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
