export type Heading = {
  text: string;
  id: string;
  level: number;
};

export default function getHeadings(content: string): Heading[] {
  const regex = /^(#{1,6})\s+(.*)$/gm;

  const headings: Heading[] = [];
  const idCounts: Record<string, number> = {};

  let match;

  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();

    // base id
    const baseId = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");

    // ensure uniqueness
    if (idCounts[baseId] === undefined) {
      idCounts[baseId] = 0;
    } else {
      idCounts[baseId]++;
    }

    const id =
      idCounts[baseId] === 0 ? baseId : `${baseId}-${idCounts[baseId]}`;

    headings.push({
      text,
      id,
      level,
    });
  }

  return headings;
}
