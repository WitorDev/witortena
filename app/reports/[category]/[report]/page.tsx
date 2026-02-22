// app/reports/[category]/[report]/page.tsx
import { Ubuntu_Mono } from "next/font/google";

import matter from "gray-matter";

import { getReports } from "@/util/getReports";

import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import MarkdownSection from "@/app/components/MarkdownSection";
import ImageGallery from "@/app/components/ImageGallery";
import Link from "next/link";
import { BiSolidHome } from "react-icons/bi";
import Breadcrumbs from "@/app/components/Breadcrumbs";

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
          file.name.endsWith(".png"),
      )
    : [];

  const { data, content } = matter(report.markdown);

  return (
    <section
      id="hero"
      className={`${ubuntuMonoFont.className} overflow-hidden bg-deep relative flex flex-col`}
    >
      {report ? (
        <article className="">
          <div className="bg-background pt-32 pb-8 border-b border-primary-bg">
            <div className="px-4 max-w-screen-xl mx-auto sm:-text-sm flex gap-2 whitespace-nowrap overflow-x-auto">
              <Breadcrumbs />
            </div>
          </div>
          {reportImages.length > 0 && <ImageGallery images={reportImages} />}

          <MarkdownSection
            text={data.title}
            className={"w-fit ml-4 font-bold text-3xl pt-8 pb-1"}
          />
          <MarkdownSection text={content} style={true} />
        </article>
      ) : (
        <p>No report found</p>
      )}
    </section>
  );
}
