import { readFile } from "node:fs";
import path from "node:path";

export default function getPost(postTitle) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "posts",
    `${postTitle}.md`,
  );
  return new Promise((resolve, reject) => {
    readFile(filePath, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
