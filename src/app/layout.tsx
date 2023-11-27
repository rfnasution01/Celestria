import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Celestria - Transformasi Dokumen Menjadi NFT",
  description:
    "Jelajahi keajaiban Celestria, platform revolusioner yang mengubah file dokumen menjadi seni digital tak tergantikan. Setiap halaman adalah karya seni, setiap kata bernilai, dan setiap dokumen diabadikan sebagai NFT di blockchain. Raih pengalaman baru dengan Celestria, di mana cerita-cerita Anda menjadi abadi di dunia digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
