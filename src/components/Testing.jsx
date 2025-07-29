import React from "react";

const Testing = ({
  heading = "Testing & Commissioning Management",
  imageSrc = "/image/test.png",
  paragraphs = [],
  dotColor = "#00ADB1",
  underlineColor = "#F16624",
}) => {
  return (
    <div>
      <div className="bg-white text-black py-16 px-6">
        {/* Dots */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: dotColor }} />
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: dotColor }} />
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: dotColor }} />
        </div>

        {/* Heading and underline */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-left mb-2">{heading}</h2>
          <div className="w-full h-[2px] mb-10" style={{ backgroundColor: underlineColor }} />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={imageSrc}
              alt="About"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-lg leading-8">
            {paragraphs.map((para, index) => (
              <p key={index} className="mb-6">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
