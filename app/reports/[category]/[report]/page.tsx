// app/reports/[category]/[report]/page.tsx
import { Ubuntu_Mono } from "next/font/google";

import { getReports } from "@/util/getReports";

import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import MarkdownSection from "@/app/components/MarkdownSection";
import ImageGallery from "@/app/components/ImageGallery";
import Link from "next/link";
import { BiSolidHome } from "react-icons/bi";

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
  params: { category: string; report: string };
}) {
  const pageParams = await params;
  const reports = getReports(pageParams.category);
  console.log(pageParams.category);

  const report = reports.find((r) => r.folder == pageParams.report);

  const reportImages = report
    ? report.files.filter(
        (file: any) =>
          file.name.endsWith(".jpg") ||
          file.name.endsWith(".jpeg") ||
          file.name.endsWith(".png")
      )
    : [];

  return (
    <section
      id="hero"
      className={`${ubuntuMonoFont.className} mx-auto max-w-screen-xl relative pt-32 flex flex-col`}
    >
      {report ? (
        <>
          <div className="pb-2 sm:-text-sm flex gap-2 whitespace-nowrap overflow-x-auto mx-4">
            <Link
              href="/#contributions"
              className="group flex items-center gap-1 w-fit hover:text-secondary-accent transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="flex rounded-lg bg-terciary-accent/30 p-2 items-center justify-center gap-2">
                  <BiSolidHome size={20} />
                </div>
              </div>
            </Link>
            <Link
              href={`/reports`}
              className="group flex items-center gap-1 w-fit transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <span>/</span>
                <span className="group-hover:text-secondary-accent">
                  Relatórios
                </span>
              </div>
            </Link>
            <Link
              href={`/reports/${pageParams.category}`}
              className="group flex items-center gap-1 w-fit transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <span>/</span>
                <span className="group-hover:text-secondary-accent">
                  {pageParams.category.charAt(0).toUpperCase() +
                    pageParams.category
                      .slice(1, pageParams.category.length)
                      .replace("-", " ")
                      .replace("c", "C")}
                </span>
              </div>
            </Link>
            <div className="hidden sm:flex items-center justify-center gap-2">
              <span>/</span>
              <span className="text-terciary-bg cursor-default">
                {pageParams.report}
              </span>
            </div>
          </div>
          {reportImages.length > 0 && <ImageGallery images={reportImages} />}

          <MarkdownSection text={report.markdown} style={true} />
        </>
      ) : (
        <p>No report found</p>
      )}
    </section>
  );
}
