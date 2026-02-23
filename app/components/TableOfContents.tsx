"use client";

import { useEffect, useState, useRef } from "react";
import { BiRss } from "react-icons/bi";
import {
  GoShareAndroid,
  GoSidebarCollapse,
  GoSidebarExpand,
} from "react-icons/go";
import { Link as ScrollLink } from "react-scroll";

type Heading = {
  text: string;
  id: string;
  level: number;
};

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [shown, setShown] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      lastScrollY.current = currentY;

      // Find active heading
      let currentActive: string | null = null;

      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].id);

        if (el && el.offsetTop - 140 <= currentY) {
          currentActive = headings[i].id;
          break;
        }
      }

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <div
      className={`hidden lg:block ml-8 flex-shrink-0 transition-all ${shown ? "w-80" : "w-fit"}`}
    >
      {/* STICKY CONTAINER */}
      <div className="sticky top-48 max-h-[calc(100vh-7rem)] flex flex-col">
        {/* TOC PANEL */}
        <aside className="overflow-y-auto pr-2">
          {/* Toggle button */}
          <div className="flex justify-end mb-2">
            {shown ? (
              <GoSidebarCollapse
                size={22}
                onClick={() => setShown(false)}
                className="cursor-pointer  text-primary-accent hover:text-secondary-accent transition-colors"
              />
            ) : (
              <GoSidebarExpand
                size={22}
                onClick={() => setShown(true)}
                className="cursor-pointer text-primary-accent hover:text-secondary-accent transition-colors"
              />
            )}
          </div>

          {/* Content */}
          {shown && (
            <>
              <h2 className="text-3xl font-bold -translate-y-9 w-fit">
                Conteúdo
              </h2>

              <hr className="border-primary-accent mb-4 -translate-y-6" />

              <ul className="space-y-2 text-sm w-fit -translate-y-6">
                {headings.map((heading) => {
                  const isActive = activeId === heading.id;

                  return (
                    <li
                      key={heading.id}
                      style={{
                        paddingLeft: `${(heading.level - 2) * 20}px`,
                      }}
                    >
                      <ScrollLink
                        to={heading.id}
                        smooth={true}
                        offset={-120}
                        duration={400}
                        spy={false}
                        className={`
                          block cursor-pointer truncate border-l-2 transition-all

                          ${
                            isActive
                              ? "text-primary-accent border-l-primary-accent pl-2"
                              : "border-transparent hover:text-secondary-accent"
                          }
                        `}
                      >
                        {heading.text}
                      </ScrollLink>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </aside>

        {/* SHARE BUTTONS */}
        {/* <div
          className={`flex gap-4 mt-6 w-fit ${!shown ? "flex-col py-3 px-2 bg-primary-bg rounded-lg" : "flex-row"}`}
        >
          <button
            className="text-primary-accent cursor-pointer hover:text-secondary-accent transition-colors"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Page URL copied to clipboard");
            }}
          >
            <GoShareAndroid size={20} />
          </button>

          {/* <a
            href="/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-accent cursor-pointer hover:text-secondary-accent transition-colors"
            title="RSS Feed"
          >
            <BiRss size={20} />
          </a> */}
        {/* </div> */}
      </div>
    </div>
  );
}
