"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

type DropdownProps = {
  title: string;
  options: string[];
  links?: string[];
  pageUrl?: string;
  final?: boolean;
};

export default function Dropdown({
  title,
  options,
  links,
  pageUrl,
  final,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsOpen(false);
    }

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const pathname = usePathname();

  return (
    <div
      ref={containerRef}
      className="z-40 transition-all relative inline-block"
    >
      <div
        className={`flex text-lg gap-2 hover:cursor-pointer hover:text-terciary-bg ${
          isOpen && "text-terciary-bg"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h1>{title}</h1>
        <SlArrowDown size={10} strokeWidth={40} className="translate-y-2.5" />
      </div>

      {isOpen && (
        <div className="absolute top-full flex w-max flex-col gap-1 mt-10 border border-terciary-bg rounded-lg bg-background p-4">
          {options.map((option, id) => {
            if (links && pageUrl !== pathname) {
              if (final) {
                return (
                  <Link
                    href={pageUrl + "/" + links[id] || "/"}
                    onClick={() => setIsOpen(false)}
                    key={id}
                    className="hover:text-terciary-bg mt-1 hover:cursor-pointer"
                  >
                    {option}
                  </Link>
                );
              }

              return (
                <Link
                  href={pageUrl + "#" + links[id] || "/"}
                  onClick={() => setIsOpen(false)}
                  key={id}
                  className="hover:text-terciary-bg mt-1 hover:cursor-pointer"
                >
                  {option}
                </Link>
              );
            }

            if (links && pageUrl === pathname) {
              return (
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to={links[id]}
                  smooth={true}
                  duration={600}
                  key={id}
                  className="hover:text-terciary-bg mt-1 hover:cursor-pointer"
                >
                  {option}
                </ScrollLink>
              );
            }

            return (
              <h1
                key={id}
                className="hover:text-terciary-bg mt-1 hover:cursor-pointer"
              >
                {option}
              </h1>
            );
          })}
        </div>
      )}
    </div>
  );
}
