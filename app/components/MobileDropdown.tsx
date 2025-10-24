"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

type MobileDropdownProps = {
  title: string;
  options: string[];
  links?: string[];
  pageUrl?: string;
  final?: boolean;
  setMobileNavbar?: any;
};

export default function MobileDropdown({
  title,
  options,
  links,
  pageUrl,
  final,
  setMobileNavbar,
}: MobileDropdownProps) {
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

  const pathname = usePathname();
  return (
    <div ref={containerRef} className="transition-all inline-block w-full">
      <div
        className={`flex py-4 w-full bg-background gap-2 text-center hover:cursor-pointer justify-center hover:text-terciary-bg ${
          isOpen && "text-terciary-bg"
        }`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1 className="text-center">{title}</h1>
        <SlArrowDown size={15} strokeWidth={40} className="translate-y-2.5" />
      </div>

      {isOpen && (
        <div className="flex flex-col gap-1  w-full items-center justify-between bg-background p-4">
          {options.map((option, id) => {
            // in case is not in this page, link to the right page
            if (links && pageUrl !== pathname) {
              if (final) {
                return (
                  <Link
                    href={pageUrl + "/" + links[id] || "/"}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileNavbar(false);
                    }}
                    key={id}
                    className="hover:text-terciary-bg mt-1 text-center hover:cursor-pointer"
                  >
                    {option}
                  </Link>
                );
              }
              return (
                <Link
                  //href={`/#${link.to}`}
                  href={pageUrl + "#" + links[id] || "/"}
                  onClick={() => setIsOpen(false)}
                  key={id}
                  className="hover:text-terciary-bg mt-1 hover:cursor-pointer"
                >
                  {option}
                </Link>
              );
            }

            // in case is in this page, scroll to the right section
            if (links && pageUrl === pathname) {
              return (
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to={links[id]}
                  smooth={true}
                  duration={300}
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
