import { Ubuntu_Mono } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { getReports } from "@/util/getReports";
import ReportCard from "@/app/components/ReportCard";
import Image from "next/image";
import hero_image from "@/public/disk.png";
import { SlArrowDown } from "react-icons/sl";
import ReportHeroSection from "@/app/components/ReportHeroSection";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});
const ubuntuFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const reports = getReports(await params.category);
  console.log(await params.category);

  return (
    <div className="bg-secondary-bg">
      <div
        id="hero"
        className={`${ubuntuMonoFont.className} mx-auto relative  flex flex-col justify-center items-center`}
      >
        <ReportHeroSection
          title={
            (await params.category) == "NPI"
              ? "Núcleo de Práticas de Informática"
              : "Pensamento Computacional"
          }
        />

        {/* relatorios */}
        <div className="flex gap-4 mt-20 mb-20 w-full sm:flex-row flex-col max-w-screen-xl px-4">
          <h1 className="text-3xl font-bold">Relatórios </h1>
          <p className={`${ubuntuFont.className} text-3xl text-terciary-bg`}>
            {(await params.category) == "NPI"
              ? "NPI - Núcleo de Práticas de Informática"
              : "Pensamento Computacional"}
          </p>
        </div>

        <section className="flex max-w-screen-xl px-4 sm:px-0 mb-20 flex-wrap justify-center align-middle gap-6 w-full">
          {reports.map((reportItem) => (
            <ReportCard
              key={reportItem.folder}
              date={reportItem.folder}
              title={reportItem.folder}
              paragraph={reportItem.markdown}
              reportType={reportItem.reportCategory}
              image={
                reportItem.files.find(
                  (file: any) =>
                    file.name.endsWith(".jpg") ||
                    file.name.endsWith(".jpeg") ||
                    file.name.endsWith(".png")
                )
                  ? reportItem.files[0]
                  : null
              }
            />
          ))}
        </section>
      </div>
    </div>
  );
}
