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
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Portifólio de Witor Tena - Desenvolvedor Backend Springboot, com projetos relatórios e acesso a contatos."
        />

        <meta
          name="keywords"
          content="web, relatórios, unifil, portfolio, typescript, react, next.js, springboot, desenvolvedor web, desenvolvedor, java."
        />
        <meta name="author" content="Witor Tenã" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Witor Tenã" />
        <meta
          property="og:description"
          content="Portifólio de Witor Tena - Desenvolvedor Backend Springboot, com projetos relatórios e acesso a contatos."
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={`antialiased ${ubuntuFont.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
