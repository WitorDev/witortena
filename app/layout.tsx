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
    <html lang="pt-br">
      <head>
        <meta
          name="google-site-verification"
          content="7HANDIhzcQhtuxAHk-gHDGzLP9Gm7CyWMsbWvY_fhtk"
        />
        <title>Witor Tenã</title>
      </head>
      <body className={`antialiased ${ubuntuFont.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
