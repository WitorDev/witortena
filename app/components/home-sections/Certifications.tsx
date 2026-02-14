import Link from "next/link";
import TableRow from "../TableRow";
import { certificationsData } from "@/app/data/certificationsData";
import { PiCertificateDuotone } from "react-icons/pi";

export default function Certification() {
  type Certification = {
    id: number;
    title: string;
    organization: string;
    year: number;
    link: string;
    imageSrc: string;
    skills: string[];
    tags: string[];
  };

  const chosenIndexes: number[] = [1, 2, 4];
  const chosenCertificates = certificationsData.filter((cert) =>
    chosenIndexes.includes(cert.id),
  );

  return (
    <section
      id="certifications"
      className="w-full max-w-screen-xl mx-auto px-4"
    >
      <h1 className="text-3xl font-bold w-full text-center md:text-left pt-6 sm:pt-26 mb-12">
        Certificações
      </h1>

      <section className="w-full overflow-x-auto gap-2 flex flex-col">
        {chosenCertificates.map((certification) => (
          <TableRow
            key={certification.id}
            course_id={certification.id}
            course_title={certification.title}
            organization={certification.organization}
            earned_year={certification.year}
            certificate_image={certification.imageSrc}
          />
        ))}
      </section>
      <Link
        href="/certifications"
        className="group mt-8 sm:mx-0 mx-auto text-primary-accent flex items-center gap-1 w-fit text-sm text-muted-foreground hover:text-secondary-accent transition-colors"
      >
        <PiCertificateDuotone
          size={24}
          className="mr-1 group-hover:-translate-y-1 transition-transform"
        />
        <span>Ver todos os certificados</span>
      </Link>
    </section>
  );
}
