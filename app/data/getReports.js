// utils/reports-extractor.js
const fs = require("fs/promises");
const path = require("path");

/**
 * Searches the 'reports' folder for specified primary subfolders (NPI, pensamento-computacional),
 * then traverses all date-named subfolders within them, and returns an array of objects
 * linking markdown content with the relative paths of associated images.
 * @param {string} rootDirectory The directory containing the 'reports' folder.
 * @returns {Promise<Array<{folder: string, date: string, content: string, images: string[]}>>}
 * A Promise that resolves to a structured array of report data.
 */
export async function extractReportsData(rootDirectory) {
  const primaryFolderName = "reports";
  const primarySubFolders = ["NPI", "pensamento-computacional"];
  // Use path.resolve to ensure we get an absolute path starting from the project root
  // The 'reports' folder is expected inside the 'public' directory in your setup.
  const reportsPath = path.join(rootDirectory, primaryFolderName);
  const dataArray = [];

  // List of common image extensions to look for
  const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".svg"];

  try {
    const primaryItems = await fs.readdir(reportsPath, { withFileTypes: true });

    const primaryFolderPromises = primaryItems
      .filter(
        (item) => item.isDirectory() && primarySubFolders.includes(item.name)
      )
      .map(async (primaryDir) => {
        const primaryDirPath = path.join(reportsPath, primaryDir.name);
        const dateFolders = await fs.readdir(primaryDirPath, {
          withFileTypes: true,
        });

        const dateFolderPromises = dateFolders
          .filter((item) => item.isDirectory())
          .map(async (dateDir) => {
            const dateDirPath = path.join(primaryDirPath, dateDir.name);
            const filesInDateDir = await fs.readdir(dateDirPath);

            let reportContent = null;
            const imagePaths = [];

            for (const filename of filesInDateDir) {
              const fileExtension = path.extname(filename).toLowerCase();
              const fullPath = path.join(dateDirPath, filename);

              if (fileExtension === ".md") {
                reportContent = await fs.readFile(fullPath, {
                  encoding: "utf8",
                });
              } else if (imageExtensions.includes(fileExtension)) {
                // Path relative to the public/ directory, accessible by the frontend
                const relativePath = path.join(
                  primaryFolderName,
                  primaryDir.name,
                  dateDir.name,
                  filename
                );
                imagePaths.push(
                  relativePath.split(path.sep).join(path.posix.sep)
                ); // Use forward slashes for URL paths
              }
            }

            if (reportContent) {
              return {
                folder: primaryDir.name,
                date: dateDir.name,
                content: reportContent,
                images: imagePaths,
              };
            }
            return null;
          });

        return await Promise.all(dateFolderPromises);
      });

    const resultsByPrimaryFolder = await Promise.all(primaryFolderPromises);

    resultsByPrimaryFolder.flat().forEach((data) => {
      if (data !== null) {
        dataArray.push(data);
      }
    });
  } catch (e) {
    if (e.code === "ENOENT") {
      console.error(
        `Error: The '${primaryFolderName}' folder was not found at: ${reportsPath}`
      );
    } else {
      console.error(`An unexpected error occurred: ${e.message}`);
    }
  }

  return dataArray;
}
