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
  const reportTypeURL = await params;
  const reports = getReports(reportTypeURL.category);

  console.log(reportTypeURL);

  let title =
    (reportTypeURL.category === "NPI" && "Núcleo de Práticas de Informática") ||
    (reportTypeURL.category === "pensamento-computacional" &&
      "Pensamento Computacional") ||
    (reportTypeURL.category === "blog" && "Blog");

  return (
    <div className="bg-secondary-bg">
      <div
        id="hero"
        className={`${ubuntuMonoFont.className} mx-auto relative flex flex-col justify-center items-center`}
      >
        <ReportHeroSection
          title={title}
          category={
            reportTypeURL.category.charAt(0).toUpperCase() +
            reportTypeURL.category
              .slice(1, reportTypeURL.category.length)
              .replace("-", " ")
              .replace("c", "C")
          }
        />

        {/* relatorios */}
        <div className="flex gap-4 mt-8 align-middle mb-8 w-full sm:flex-row flex-col max-w-screen-xl px-4">
          <h1 className="text-xl font-bold">Relatórios </h1>
          <p className={`${ubuntuFont.className} text-xl text-terciary-bg`}>
            {reportTypeURL.category == "NPI"
              ? "NPI - Núcleo de Práticas de Informática"
              : "Pensamento Computacional"}
          </p>
        </div>

        <section className="flex max-w-screen-xl px-4 sm:px-0 mb-20 flex-row flex-wrap justify-center align-middle gap-8 w-full">
          {reports.map((reportItem) => (
            <ReportCard
              key={reportItem.folder}
              date={reportItem.folder}
              title={reportItem.markdown}
              paragraph={reportItem.markdown}
              type={reportTypeURL.category}
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
