"use client";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface CarouselProps {
  images: string[];
}

export default function Slider({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const currentImages = images[current];

  const prevImage = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? images.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextImage = () => {
    const isLastSlide = current === images.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };
  return (
    <div className="relative pb-16">
      <div>
        <button
          onClick={prevImage}
          className="absolute left-[5%] top-[50%] z-[40]"
        >
          <BsArrowLeft />
        </button>
        <img
          src={currentImages}
          alt={`Image ${current - 1}`}
          className="h-[500px]"
          style={{ margin: "0 20%" }}
        />
        <button
          onClick={nextImage}
          className="absolute right-[5%] top-[50%] z-[40]"
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
