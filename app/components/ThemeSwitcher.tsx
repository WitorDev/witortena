"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("mylight");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "mylight";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "mylight" ? "dark" : "mylight";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button onClick={toggleTheme} className="button-fill px-4 py-2 rounded">
      {theme === "mylight" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
