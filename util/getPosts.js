import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export default async function getAllPosts() {
  const postsDir = path.join(process.cwd(), "public", "posts");
  const files = await readdir(postsDir);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const filePath = path.join(postsDir, file);
        const data = await readFile(filePath, "utf8");
        return { title: file.replace(".md", ""), postData: data };
      }),
  );

  return posts;
}
