"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight, HiXMark } from "react-icons/hi2";

interface ReportFile {
  name: string;
  url: string;
}

interface ImageGalleryProps {
  images: ReportFile[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const totalImages = images.length;
  const currentImage = images[currentImageIndex];

  const goToPrevious = () => {
    setCurrentImageIndex((i) => (i === 0 ? totalImages - 1 : i - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((i) => (i === totalImages - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 w-full mb-8">
        <div
          className="mb-4 overflow-hidden w-full rounded-xl border-4 border-background cursor-zoom-in
						h-[240px] sm:h-[380px] md:h-[520px] lg:h-[700px]"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={currentImage.url}
            alt={currentImage.name}
            width={1280}
            height={700}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {totalImages > 1 && (
          <div className="flex justify-end items-center gap-3">
            <span className="text-sm sm:text-lg border-2 border-terciary-bg py-1 sm:py-2 px-3 sm:px-4 rounded-xl">
              {currentImageIndex + 1} / {totalImages}
            </span>

            <button
              onClick={goToPrevious}
              className="border-2 cursor-pointer border-terciary-bg p-2 rounded-full hover:bg-primary-bg hover:border-foreground"
            >
              <HiArrowLeft size={22} />
            </button>

            <button
              onClick={goToNext}
              className="border-2 cursor-pointer border-terciary-bg p-2 rounded-full hover:bg-primary-bg hover:border-foreground"
            >
              <HiArrowRight size={22} />
            </button>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:opacity-70"
          >
            <HiXMark size={32} />
          </button>

          {totalImages > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute cursor-pointer z-50 left-3 sm:left-6 text-white hover:opacity-70"
            >
              <HiArrowLeft size={40} />
            </button>
          )}

          <div className="relative w-full h-full max-w-[95vw] max-h-[90vh]">
            <Image
              src={currentImage.url}
              alt={currentImage.name}
              fill
              className="object-contain"
            />
          </div>

          {totalImages > 1 && (
            <button
              onClick={goToNext}
              className="absolute cursor-pointer right-3 sm:right-6 text-white hover:opacity-70"
            >
              <HiArrowRight size={40} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
