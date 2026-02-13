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
  padding?: boolean;
}

export default function ImageGallery({ images, padding }: ImageGalleryProps) {
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Main gallery preview */}
      <div
        className={`mx-auto max-w-screen-xl w-full ${!padding && "mb-8 mt-6 px-4"}`}
      >
        <div
          className="mb-4 overflow-hidden w-full rounded-xl border-4 border-background cursor-zoom-in
            max-h-[600px] flex justify-center items-center hover:opacity-85 hover:border-secondary-accent transition-all"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={currentImage.url}
            alt={currentImage.name}
            width={1280}
            height={700}
            className="h-full w-full object-contain"
            priority
          />
        </div>

        {/* Controls */}
        {totalImages > 1 && (
          <div className="flex justify-end items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm md:text-base border-2 border-terciary-bg py-1 px-2 sm:py-2 sm:px-3 rounded-xl">
              {currentImageIndex + 1} / {totalImages}
            </span>

            <button
              onClick={goToPrevious}
              className="border-2 cursor-pointer border-terciary-bg p-1 sm:p-2 rounded-full hover:bg-primary-bg hover:border-foreground"
            >
              <HiArrowLeft size={18} className="sm:text-lg" />
            </button>

            <button
              onClick={goToNext}
              className="border-2 cursor-pointer border-terciary-bg p-1 sm:p-2 rounded-full hover:bg-primary-bg hover:border-foreground"
            >
              <HiArrowRight size={18} className="sm:text-lg" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-2 sm:p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute z-[10000] top-4 right-4 text-white cursor-pointer hover:text-secondary-accent"
          >
            <HiXMark size={32} />
          </button>

          {totalImages > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute z-[9999] cursor-pointer left-2 sm:left-6 text-white hover:text-secondary-accent"
            >
              <HiArrowLeft size={36} className="sm:text-4xl" />
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
              className="absolute z-[9999] cursor-pointer right-2 sm:right-6 text-white hover:text-secondary-accent"
            >
              <HiArrowRight size={36} className="sm:text-4xl" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
