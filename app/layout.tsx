import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import "@/app/globals.css";
import { Ubuntu } from "next/font/google";

const ubuntuFont = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${ubuntuFont.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
