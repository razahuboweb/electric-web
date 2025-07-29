import React from "react";

const Hero = ({
  backgroundImage = "/image/about.jpg",
  overlayColor = "#081D30",
  overlayOpacity = 0.6,
  headingText = "STED, a story of precision and determination",
  lineColor = "#00ADB1",
}) => {
  // Convert HEX to RGBA
  const hexToRgba = (hex, opacity) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ backgroundColor: hexToRgba(overlayColor, overlayOpacity) }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-10 gap-8 text-center md:text-left">
        {/* Lines */}
        <div className="flex flex-col gap-4 relative items-center md:items-start order-1 md:order-2">
          <div
            className="w-36 sm:w-44 md:w-52 h-[2px] rotate-[-30deg] origin-left absolute top-0 left-0"
            style={{ backgroundColor: lineColor }}
          />
          <div
            className="w-44 sm:w-56 md:w-64 h-[2px] rotate-[-30deg] origin-left mt-4"
            style={{ backgroundColor: lineColor }}
          />
        </div>

        {/* Text */}
        <div className="text-white max-w-md order-2 md:order-1">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug">
            {headingText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
