import fs from "fs";
import path from "path";

/**
 * Extracts the date (DD-MM-YYYY) from the folder name and formats it to YYYY-MM-DD
 * for reliable string-based date comparison.
 * @param {string} folderName The folder name, e.g., '1_20-02-2021'
 * @returns {string | null} The date string in 'YYYY-MM-DD' format, or null if parsing fails.
 */
const dateFromFolderName = (folderName) => {
  // Assuming folder names are in the format: [number]_[DD-MM-YYYY]
  const dateString = folderName.split("_")[1];

  if (!dateString) return null;

  // Split date components: ['DD', 'MM', 'YYYY']
  const parts = dateString.split("-");

  if (parts.length !== 3) return null;

  const [day, month, year] = parts;

  // Reformat to YYYY-MM-DD for reliable comparison (ISO 8601 format)
  return `${year}-${month}-${day}`;
};

export function getReports(category) {
  let reportsPath = "";

  // 1. Determine the correct reports directory
  if (category === "NPI") {
    // Adjust path for deployment environment if necessary, but follow initial pattern
    reportsPath = path.join(process.cwd(), "public", "reports", "NPI");
  } else {
    reportsPath = path.join(
      process.cwd(),
      "public",
      "reports",
      "pensamento-computacional"
    );
  }

  // Read all subfolders (report folders)
  let folders = fs.readdirSync(reportsPath);

  // 2. Sort the folders by date in descending order (Newest first)
  folders.sort((a, b) => {
    const dateA = dateFromFolderName(a);
    const dateB = dateFromFolderName(b);

    // Handle unparsable dates: move them to the end of the list
    if (!dateA) return 1;
    if (!dateB) return -1;

    // Use localeCompare for string comparison.
    // dateB.localeCompare(dateA) ensures descending order (newest date B comes before older date A).
    return dateB.localeCompare(dateA);
  });

  const reportsContent = [];

  // 3. Process the now-sorted folders
  folders.forEach((folderName) => {
    const folderPath = path.join(reportsPath, folderName);
    const files = fs.readdirSync(folderPath);

    // Find the primary markdown file
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

  console.log(reportsContent);
  return reportsContent;
}
