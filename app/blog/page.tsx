import { Ubuntu_Mono } from "next/font/google";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import getAllPosts from "@/util/getPosts";
import matter from "gray-matter";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default async function Blog() {
  return (
    <>
      <main className={`${ubuntuMonoFont.className} bg-deep pt-32 pb-12`}>
        <section className="max-w-screen-xl mx-auto px-4">
          <div className="sm:-text-sm flex gap-2 whitespace-nowrap overflow-x-auto">
            <Breadcrumbs />
          </div>

          {/* Header */}
          <div className="mb-8 mt-4 flex flex-col justify-between gap-2">
            <h1 className="text-3xl font-bold">Blog</h1>
            <p className="text-terciary-bg">Bem vindo ao meu Blog!</p>
          </div>

          <ul className="w-full">
            {(await getAllPosts()).map(({ title, postData }, index) => {
              const { data } = matter(postData);
              return (
                <PostLink
                  link={title}
                  title={data.title}
                  date={data.date}
                  key={index}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

function PostLink({
  title,
  link,
  date,
}: {
  title: string;
  link: string;
  date: string;
}) {
  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${day}-${month}-${year}`).toLocaleDateString("pt-br");
  };

  return (
    <li className="border-t border-t-terciary-bg">
      <Link
        href={"/blog/" + link}
        className="block text-primary-accent hover:text-secondary-accent hover:bg-primary-bg px-2 py-2 flex justify-between items-center"
      >
        <p>{title}</p>
        <p>
          {new Date(
            `${date.split("/").reverse().join("-")}`,
          ).toLocaleDateString(navigator.language)}
        </p>
      </Link>
    </li>
  );
}
