//import font
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

//customise font
const robotoMono = Roboto_Mono({
  variable: "--thin", //this is a CSS variable
  subsets: ["latin"],
  weight: "400",
});

const robotoMonoBold = Roboto_Mono({
  variable: "--bold", //this is a CSS variable
  subsets: ["latin"],
  weight: "700",
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
      {/* add font variable as a classname */}
      <body className={`${robotoMono.variable} ${robotoMonoBold.variable}`}>
        {children}
      </body>
    </html>
  );
}

// className={robotoMono.className}
