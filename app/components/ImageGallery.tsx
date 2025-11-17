// app/components/ImageGallery.tsx
"use client"; // This directive makes it a Client Component

import { useState } from "react";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

// Define the shape of the image object as it comes from your Page component
interface ReportFile {
  name: string;
  url: string;
}

interface ImageGalleryProps {
  images: ReportFile[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  // 1. State to track the index of the currently displayed image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return null; // Don't render if there are no images
  }

  const currentImage = images[currentImageIndex];
  const totalImages = images.length;

  // 2. Handlers to navigate between images
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      // Loop back to the last image if the current one is the first
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      // Loop back to the first image if the current one is the last
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 w-full mb-8">
      {/* Currently displayed image */}
      <div className="border-background mb-4 overflow-hidden w-full z-10 rounded-xl border-5 h-[700px]">
        <Image
          width={1280}
          height={700}
          src={currentImage.url}
          alt={currentImage.name}
          className="h-full w-full object-cover z-1"
          priority // Consider adding priority for the first image
        />
      </div>

      {/* Navigation buttons and indicator */}
      {totalImages > 1 && (
        <div className="flex justify-end items-center gap-4">
          {/* Indicator */}
          <span className="text-lg border-2 border-terciary-bg py-2 mr-2 px-4 rounded-xl">
            {currentImageIndex + 1} / {totalImages}
          </span>
          {/* Previous Button */}
          <button
            className="border-2 border-terciary-bg p-2 rounded-full cursor-pointer hover:bg-primary-bg hover:border-foreground"
            onClick={goToPrevious}
          >
            <HiArrowLeft size={25} />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="border-2 border-terciary-bg p-2 rounded-full cursor-pointer hover:bg-primary-bg hover:border-foreground"
          >
            <HiArrowRight size={25} />
          </button>
        </div>
      )}
    </div>
  );
}
