// techColors.ts

// Alive but controlled colors (no pure black)
const TECH_COLORS: Record<string, string> = {
  // Frontend
  javascript: "#E0D36A",
  html: "#D96C4F",
  css: "#4F7DBA",
  tailwindcss: "#4FB3C4",
  react: "#5FA8D3",
  framer: "#C45A8D",
  threejs: "#4A5057", // graphite (not black)
  nextjs: "#505050", // dark gray

  // Backend
  nodejs: "#5FA06A",
  express: "#6B6B6B",
  php: "#7B7FBF",
  mysql: "#5F8DBA",
  postgresql: "#4F6FA3",
  sql: "#7A7A7A",
  mongodb: "#4F8A5F",
  prisma: "#7A7FB0",

  // Languages / Others
  java: "#C25F5F",
  typescript: "#4F7DBA",
  godot: "#3F6FA6",

  // Tools
  git: "#D06C4F",
  linux: "#F2C94C",
  postman: "#F2994A",
  insomnia: "#7F6BC2",
  figma: "#C85F5F",

  // Fallback (never black)
  default: "#9CA3AF",
};

// UI label → color key
const TECH_ALIASES: Record<string, string> = {
  js: "javascript",
  javascript: "javascript",

  html: "html",
  html5: "html",

  css: "css",
  css3: "css",

  tailwind: "tailwindcss",
  tailwindcss: "tailwindcss",

  react: "react",

  framer: "framer",
  motion: "framer",

  three: "threejs",
  threejs: "threejs",
  "three.js": "threejs",

  next: "nextjs",
  nextjs: "nextjs",
  "next.js": "nextjs",

  node: "nodejs",
  nodejs: "nodejs",
  "node.js": "nodejs",

  express: "express",
  php: "php",

  mysql: "mysql",
  postgres: "postgresql",
  postgresql: "postgresql",

  sql: "sql",
  mongodb: "mongodb",
  prisma: "prisma",

  java: "java",

  typescript: "typescript",
  ts: "typescript",

  godot: "godot",

  git: "git",
  linux: "linux",
  postman: "postman",
  insomnia: "insomnia",
  figma: "figma",
};

// Normalize any UI text
function normalizeTechName(name: string) {
  return name === "GODOT Engine" || name === "Godotengine"
    ? "godot"
    : name
        .toLowerCase()
        .replace(/\./g, "")
        .replace(/\s+/g, "")
        .replace(/-/g, "");
}

// Prevent icons from becoming too dark
function ensureVisibleColor(hex: string) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);

  // perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // If too dark → lift it
  if (brightness < 60) {
    const lift = 70;
    const nr = Math.min(r + lift, 255);
    const ng = Math.min(g + lift, 255);
    const nb = Math.min(b + lift, 255);

    return `rgb(${nr}, ${ng}, ${nb})`;
  }

  return hex;
}

export default function getColorForTech(name: string) {
  const normalized = normalizeTechName(name);
  const aliasKey = TECH_ALIASES[normalized];

  const baseColor = (aliasKey && TECH_COLORS[aliasKey]) ?? TECH_COLORS.default;

  return ensureVisibleColor(baseColor);
}
