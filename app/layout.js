import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PixeLSense Park - Bulk Photo Editing for eCommerce | Image & Photo Editing",
  description: "PixeLSense Park is a leading photo editing company in Asia, Bangladesh. We are providing quality work around the clock. Cut-outs, Retouching &amp; more within one roof",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
      </body>
    </html>
  );
}
