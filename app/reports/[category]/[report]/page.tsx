// app/reports/[category]/[report]/page.tsx
import { Ubuntu_Mono } from "next/font/google";
// Removed unused 'Ubuntu' import

import { getReports } from "@/util/getReports";
// Removed unused 'Image' import

import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import MarkdownSection from "@/app/components/MarkdownSection";
import ImageGallery from "@/app/components/ImageGallery";

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
      className={`${ubuntuMonoFont.className} mx-auto relative pt-36 flex flex-col`}
    >
      {report ? (
        <>
          {reportImages.length > 0 && <ImageGallery images={reportImages} />}

          <MarkdownSection text={report.markdown} />
        </>
      ) : (
        <p>No report found</p>
      )}
    </section>
  );
}
