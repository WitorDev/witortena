"use client";

import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";

type Heading = {
  text: string;
  id: string;
  level: number;
};

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [y, setY] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollingUp(currentY < lastScrollY.current);
      setY(currentY);
      console.log(currentY);
      lastScrollY.current = currentY;

      // Determine which heading is currently active
      let currentActiveId: string | null = null;
      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].id);
        if (el && el.offsetTop - 120 <= currentY) {
          currentActiveId = headings[i].id;
          break;
        }
      }
      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <aside
      className={`${!scrollingUp && y > 100 && "-translate-y-13"} hidden lg:block w-fit max-w-64 mt-4 sticky top-28 h-fit transition-transform`}
    >
      <h2
        className={`text-3xl font-bold pb-2 transition-all leading-relaxed p-2`}
      >
        Conteúdo
      </h2>

      <hr className="text-primary-accent mb-4" />

      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <Link
              to={heading.id}
              smooth={true}
              offset={-120}
              duration={400}
              spy={false}
              className={`transition-all cursor-pointer border-l-2 border-transparent block truncate ${
                activeId === heading.id
                  ? "text-primary-accent border-l-primary-accent pl-2"
                  : "hover:text-secondary-accent"
              }`}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
