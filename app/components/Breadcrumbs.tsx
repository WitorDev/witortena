import Link from "next/link";

export default function Page({
  params,
}: {
  params: { category?: string; report?: string };
}) {
  return (
    <nav className="flex gap-2 px-4 pb-6">
      <Link href={"/reports/"}>reports</Link>
      <p>/</p>
      {params.category && (
        <>
          <Link href={"/reports/" + params.category}>{params.category}</Link>
          <p>/</p>
        </>
      )}
      {params.report && (
        <Link href={"/reports/" + params.category + "/" + params.report}>
          {params.report}
        </Link>
      )}
    </nav>
  );
}
