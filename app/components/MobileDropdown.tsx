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
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target.closest("[data-mobile-dropdown]")) return;
      setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      data-mobile-dropdown
      className={`w-full rounded-lg overflow-hidden bg-background`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
					w-full flex items-center justify-between
					px-5 py-4 text-base font-medium
					transition-colors
					${isOpen ? "text-terciary-bg" : "text-foreground"}
					hover:text-terciary-bg
				`}
      >
        <span>{title}</span>
        <SlArrowDown
          size={14}
          className={`
						transition-transform duration-200
						${isOpen ? "rotate-180" : "rotate-0"}
					`}
        />
      </button>

      <div
        className={`
					grid transition-all duration-300 ease-out
					${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
				`}
      >
        <div className="overflow-hidden flex flex-col divide-y divide-primary-bg">
          {options.map((option, id) => {
            if (links && pageUrl !== pathname) {
              return (
                <Link
                  key={id}
                  href={
                    final
                      ? pageUrl + "/" + links[id]
                      : pageUrl + "#" + links[id]
                  }
                  onClick={() => {
                    setIsOpen(false);
                    setMobileNavbar(false);
                  }}
                  className="
										px-5 py-3 text-sm text-center
										transition-colors
										hover:text-terciary-bg
										active:bg-primary-bg/10
									"
                >
                  {option}
                </Link>
              );
            }

            if (links && pageUrl === pathname) {
              return (
                <ScrollLink
                  key={id}
                  to={links[id]}
                  smooth
                  duration={600}
                  onClick={() => {
                    setIsOpen(false);
                    setMobileNavbar(false);
                  }}
                  className="
										px-5 py-3 text-sm text-center
										cursor-pointer
										transition-colors
										hover:text-terciary-bg
										active:bg-primary-bg/10
									"
                >
                  {option}
                </ScrollLink>
              );
            }

            return (
              <div
                key={id}
                className="
									px-5 py-3 text-sm text-center
									hover:text-terciary-bg
								"
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
