import Link from "next/link";
import { BiGlobe } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { PiGlobeX } from "react-icons/pi";
import { VscLoading } from "react-icons/vsc";

export default function NotFound() {
  return (
    <>
      <section className="h-screen flex justify-center items-center mx-auto px-4 max-w-screen-xl">
        <main className="flex gap-4">
          <figure>
            <VscLoading
              size={45}
              className="text-primary-accent animate-spin -translate-y-2"
            />
          </figure>
        </main>
      </section>
    </>
  );
}
