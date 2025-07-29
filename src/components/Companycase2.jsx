import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const companies = [
  "../../public/image/logo 1.png", "../../public/image/logo 2.png", "../../public/image/logo3.png", "../image/logo 4.png",
  "../image/logo 5.png", "../../public/image/logo 6.png", "../image/logo 7.png", "../image/logo 8.png",
  "../image/logo 9.png", "../image/logo 10.png", "../image/logo 11.png", "../image/logo 12.png",
  "../../public/image/logo 13.png", "../image/logo 14.png", "../image/logo 15.png", "../image/logo16.png",
  "../../public/image/logo 17_files", "../image/logo 18.png", "../image/logo 19.png", "../image/logo 20.png"
];

const Companycase2 = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;
  const scrollCount = 2;

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + scrollCount >= companies.length
        ? 0
        : prevIndex + scrollCount
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - scrollCount < 0
        ? companies.length - visibleCount
        : prevIndex - scrollCount
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [startIndex]);

  const visibleLogos = companies.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="bg-white text-black py-16 px-6">
      {/* Top 3 dots */}
      <div className="flex justify-center gap-6 mb-8">
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
      </div>

      {/* Heading */}
      <h2 className="text-xl font-semibold text-center mb-2">
        Trusted by Leading Companies
      </h2>

      {/* Underline */}
      <div className="w-94 h-[2px] bg-[#F16624] mx-auto mb-10" />

   

      {/* Slider with left/right controls */}
      <div className="relative max-w-6xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft className="text-[#00ADB1]" />
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          {visibleLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company ${index + 1}`}
              className="h-30 object-contain"
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight className="text-[#00ADB1]" />
        </button>
      </div>
          <div className="flex justify-center gap-6 mb-8">
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
      </div>

      {/* Heading */}
      <h2 className="text-xl font-semibold text-center mb-2">
Let's get in touch, please <br /> fill this quick form!
      </h2>

      {/* Underline */}
      <div className="w-74 h-[2px] bg-[#F16624] mx-auto mb-10" />

    </div>
  );
};

export default Companycase2;
