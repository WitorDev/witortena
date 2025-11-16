import Link from "next/link";
import { Ubuntu_Mono } from "next/font/google";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function page() {
  return (
    <div
      id="hero"
      className={`${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative min-h-screen flex flex-col justify-center items-center`}
    >
      <h1>Relatórios</h1>
      <Link href="/reports/NPI">NPI</Link>
      <Link href="/reports/pensamento-computacional">
        Pensamento Computacional
      </Link>
    </div>
  );
}
