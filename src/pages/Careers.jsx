import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Careers() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Hero
        backgroundImage="../../public/image/city.jpg"
        overlayColor="#081D30"
        overlayOpacity={0.7}
        headingText="Ethics and empathy make perfect catalyst for success."
        lineColor="#00ADB1"
      />

      <div
        className="bg-[#081D30] text-white py-16 px-4 text-center"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <div className="flex justify-center gap-6 mb-8">
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        </div>
        <h2 className="text-3xl font-semibold mb-2">
          Leading the Curve in <br /> Engineering Excellence
        </h2>
        <div className="w-74 h-[2px] bg-[#F16624] mx-auto mb-8" />
        <p className="max-w-3xl mx-auto text-lg leading-8 break-all">
          In a global era of escalating environment, social and governance
          policies; and in the decade of action on SDGs and climate change, as
          investors and development project owners at both government and
          private ends, you are keen on delivering the hundred percent of your
          conventional construction needs to focus more on advancing your
          building management system, premises performance and stakeholders’
          reward.
        </p>
         <div className="mt-10 flex justify-center">
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-white border-2 border-[#00ADB1] rounded transition-transform duration-300 hover:text-[#F16624]"
          >
            Email HR
          </button>
        </div>
      </div>

      <div
        className="text-center py-16 px-4"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <div className="flex justify-center gap-4 mb-6">
          <span className="w-5 h-5 rounded-full bg-[#00ADB1] inline-block" />
          <span className="w-5 h-5 rounded-full bg-[#00ADB1] inline-block" />
          <span className="w-5 h-5 rounded-full bg-[#00ADB1] inline-block" />
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-[#04182B] mb-2">
          Send your resume now!
        </h2>
        <div className="w-40 h-[1px] bg-[#F16624] mx-auto mb-6" />
        <Link
          to="/apply-form"
          className="bg-[#00ADB1] text-white font-bold py-2 px-6 rounded hover:bg-[#F16624] transition-all duration-300 inline-block"
        >
          Apply
        </Link>
      </div>

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

export default Careers;
