import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//global metadata
export const metadata = {
  title: "Rollercoasters Website",
  description:
    "A website to show most popular rollercoasters across the world. Amazing! Thrilling! Entertaining!",
  openGraph: {
    title: "Rollercoasters Website",
    description:
      "A website to show most popular rollercoasters across the world. Amazing! Thrilling! Entertaining!",
    type: "website",
    url: "http://localhost:3000",
    images: ["imgurl"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
