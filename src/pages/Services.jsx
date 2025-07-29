import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Testing from "../components/Testing";

import Testimonials from "../components/Testimonials";


function Services() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const serviceData = [
    {
      heading: "Testing & Commissioning Management",
      imageSrc: "/image/test.png",
    },
    {
      heading: "Construction Management",
      imageSrc: "/image/1.png",
    },
    {
      heading: "Specialized Hands-on Tests",
      imageSrc: "/image/2.png",
    },
    {
      heading: "Building Performance Evaluation",
      imageSrc: "/image/3.png",
    },
    {
      heading: "QA/QC Management & Inspection",
      imageSrc: "/image/4.png",
    },
    {
      heading: "Handover Management",
      imageSrc: "/image/5.png",
    },
    {
      heading: "Facility Management Support",
      imageSrc: "/image/6.png",
    },
  ];

  const paragraphs = [
    "Referring to the diversity in the project needs, the commissioning process takes a critical path to assure that all systems and components of a building are designed, installed, tested, operated, and maintained according to the operational requirements of the owner or final client.",
    "In practice, the commissioning process comprises the integrated application of a set of engineering techniques and procedures to check, inspect and test every operational requirement of the project, from individual functions, such as instruments and equipment, up to complex amalgamations of modules, subsystems and systems.",
  ];

  return (
    <div>
      <Hero
        backgroundImage="../../public/image/service.jpg"
        overlayColor="#081D30"
        overlayOpacity={0.7}
        headingText="Fulfillment is qualification, learning and commitment combined."
        lineColor="#00ADB1"
      />

      {serviceData.map((item, index) => (
        <div
          key={item.heading}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
        >
          <Testing heading={item.heading} imageSrc={item.imageSrc} paragraphs={paragraphs} />
        </div>
      ))}

      <div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={serviceData.length}
      >
        <Testimonials />
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 fixed bottom-6 right-6 z-50 bg-[#00ADB1] text-white rounded-full shadow-lg hover:bg-[#F16624] transition-all duration-300 animate-bounce flex items-center justify-center"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Services;
