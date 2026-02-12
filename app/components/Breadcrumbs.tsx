"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidHome } from "react-icons/bi";

function formatSegment(segment: string) {
  return decodeURIComponent(segment)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getHomeHref(firstSegment?: string) {
  switch (firstSegment) {
    case "reports":
      return "/#contributions";
    case "projects":
      return "/#projects";
    case "certifications":
      return "/#certifications";
    default:
      return "/";
  }
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const homeHref = getHomeHref(segments[0]);

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm flex gap-2 whitespace-nowrap overflow-x-auto"
    >
      {/* Home */}
      <Link
        href={homeHref}
        className="group flex items-center gap-1 hover:text-secondary-accent transition-colors"
      >
        <div className="flex rounded-lg bg-terciary-accent/30 p-2 items-center justify-center">
          <BiSolidHome size={18} />
        </div>
      </Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;

        return (
          <div key={href} className="flex items-center gap-2">
            <span>/</span>

            {isLast ? (
              <span className="text-terciary-bg cursor-default">
                {formatSegment(segment)}
              </span>
            ) : (
              <Link
                href={href}
                className="hover:text-secondary-accent transition-colors"
              >
                {formatSegment(segment)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
