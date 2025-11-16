import ReportCard from "@/app/components/ReportCard";
import { Ubuntu_Mono } from "next/font/google";

import data from "@/app/data/reportsTestData";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function page() {
  return (
    <section
      id="tech"
      className={`${ubuntuMonoFont.className} justify-center max-w-screen-xl px-4 mx-auto relative min-h-screen flex flex-col `}
    >
      <h1>Pensamento Computacional</h1>
      {/* Report Cards */}
      <div className="flex gap-4 flex-wrap">
        {data.map((report, i) => (
          <ReportCard
            key={i}
            title={report.title}
            date={report.date}
            paragraph={report.paragraph}
          />
        ))}
      </div>
    </section>
  );
}
