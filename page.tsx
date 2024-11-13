"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../../public/g10.jpg";
import image2 from "../../../../public/g9.jpg";
import image3 from "../../../../public/g25.jpg";
import image4 from "../../../../public/g27.jpg";
import image5 from "../../../../public/g26.jpg";
import image6 from "../../../../public/g5.jpg";
import image7 from "../../../../public/g6.jpg";
import image8 from "../../../../public/g28.jpg";
const images = [image1, image2, image3, image4, image5, image6, image7, image8];
const SlidingImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="relative mt-11 ml-8 h-[300px] md:h-full w-[95%] rounded-lg overflow-hidden xl:max-h-[500px] md:max-h-[300px]"
      style={{ boxShadow: "0 0 20px 0.5px", border: "none" }}
    >
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="object-fill w-full xl:max-h-[500px] md:max-h-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SlidingImages;