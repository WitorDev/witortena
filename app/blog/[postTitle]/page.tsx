import { Ubuntu_Mono } from "next/font/google";
import Breadcrumbs from "../../components/Breadcrumbs";
import getPost from "@/util/getPost";
import matter from "gray-matter";
import MarkdownSection from "@/app/components/MarkdownSection";
import TableOfContents from "@/app/components/TableOfContents";
import getHeadings from "@/util/getHeadings";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default async function Blog({
  params,
}: {
  params: Promise<{ postTitle: string }>;
}) {
  const { postTitle } = await params;

  const postData = await getPost(postTitle);

  const { data, content } = matter(postData);

  const headings = getHeadings(content);

  return (
    <>
      <main
        className={`${ubuntuMonoFont.className} bg-deep pt-32 pb-16 scroll-smooth`}
      >
        <section className="max-w-screen-xl scroll-smooth mx-auto">
          {/* Breadcrumbs */}
          <div className="sm:-text-sm flex gap-2 px-4 whitespace-nowrap overflow-x-auto">
            <Breadcrumbs />
          </div>

          {/* Layout */}
          <div className="block md:flex justify-between mr-4 gap-8">
            {/* Blog content */}
            <main className="mt-4 w-full flex flex-col justify-between gap-2 flex-1 max-w-3xl">
              {/* Title */}
              <h1 className="px-4 w-full text-3xl font-bold leading-relaxed">
                {data.title}
              </h1>

              {/* Markdown */}
              <MarkdownSection text={content} style={true} className="" />
            </main>

            {/* Table of Contents */}
            <nav className="sticky min-w-64 top-28 right-0">
              <TableOfContents headings={headings} />
            </nav>
          </div>
        </section>
      </main>
    </>
  );
}
