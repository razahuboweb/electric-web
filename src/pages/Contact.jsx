import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
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

function Contact() {
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
        backgroundImage="../../public/image/contact2.jpg"
        overlayColor="#081D30"
        overlayOpacity={0.7}
        headingText="Conversations make minds connect and opportunities accessible."
        lineColor="#00ADB1"
      />

      {/* Animated Contact Form */}
      <div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <ContactForm />
      </div>

      {/* Animated Google Map */}
      <div
        className="w-[99vw] mt-16"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.9464280131594!2d67.03329347519322!3d24.798430677957387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6f62108913%3A0xe528f5f3653fc18a!2sKarachi%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1718488012345!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
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

export default Contact;
