import fs from "fs";
import path from "path";

export function getReports(category) {
  let reportsPath = "";

  if (category === "NPI") {
    reportsPath = path.join(process.cwd(), "public", "reports", "NPI"); // should be only reports, NPI in deploy
  } else {
    reportsPath = path.join(
      process.cwd(),
      "public",
      "reports",
      "pensamento-computacional"
    );
  }

  const folders = fs.readdirSync(reportsPath); // subfolders
  const reportsContent = [];

  folders.forEach((folderName) => {
    const folderPath = path.join(reportsPath, folderName);
    const files = fs.readdirSync(folderPath); // ex: ['report.md', 'img.png']

    // find first markdown file inside the folder
    const mdFile = files.find((file) => file.endsWith(".md"));

    let markdown = "";
    if (mdFile) {
      const mdPath = path.join(folderPath, mdFile);
      markdown = fs.readFileSync(mdPath, "utf8");
    }

    reportsContent.push({
      reportCategory: category,
      folder: folderName,
      markdown,
      files: files.map((file) => ({
        name: file,
        url: `/reports/${category}/${folderName}/${file}`,
      })),
    });
  });

  return reportsContent;
}
