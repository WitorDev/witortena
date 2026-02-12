"use client";

import Image from "next/image";

export default function CertificationCard({
  course_id,
  course_title,
  organization,
  earned_year,
  certificate_image,
}: {
  course_id: number;
  course_title: string;
  organization: string;
  earned_year: number;
  certificate_image: string;
}) {
  return (
    <div
      onClick={() => window.open("/certifications/" + course_id, "_self")}
      className="cursor-pointer flex items-center gap-4 md:gap-8 p-4 md:p-6 bg-primary-bg hover:bg-secondary-bg hover:border-secondary-accent border border-transparent rounded-lg transition-all"
    >
      {certificate_image && (
        <div className="flex-shrink-0">
          <Image
            src={certificate_image}
            height={50}
            width={50}
            alt={course_title + " certificate image"}
          />
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{course_title}</h3>
        <p className="text-terciary-bg">{organization}</p>
      </div>
      <div className="hidden sm:block text-right text-terciary-bg">
        {earned_year}
      </div>
    </div>
  );
}
