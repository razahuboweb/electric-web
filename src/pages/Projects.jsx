import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import DeliveredProjects from "../components/DeliveredProjects";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";


function Projects() {
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

  return (
    <div>
      <Hero
        backgroundImage="../../public/image/projects.jpg"
        overlayColor="#081D30"
        overlayOpacity={0.7}
        headingText="Trusted by the Kingdom's Most Prominent Projects"
        lineColor="#00ADB1"
      />

      <div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <DeliveredProjects />
      </div>

      <div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <Gallery />
      </div>

      <div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
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

export default Projects;
