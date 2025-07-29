import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "People First",
    answer: "We offer end-to-end digital solutions including design, development, and strategic consulting.",
  },
  {
    question: "Continuous Progress",
    answer: "You can request a quote through our contact form or reach out directly via email.",
  },
  {
    question: "Purpose",
    answer: "Yes, we serve clients across the globe with remote collaboration tools and practices.",
  },
  {
    question: "Efficiency",
    answer: "We specialize in tech, e-commerce, healthcare, real estate, and more.",
  },
  {
    question: "Autonomy",
    answer: "Project timelines vary, but we typically deliver within 4–12 weeks depending on complexity.",
  },
  {
    question: "Quality",
    answer: "Yes, we offer ongoing maintenance, updates, and support packages.",
  },
  {
    question: "Listening",
    answer: "Absolutely! We encourage client feedback throughout every stage of the design cycle.",
  },
  {
    question: "Futurism",
    answer: "We follow agile methodologies, conduct code reviews, and perform thorough testing.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white text-black py-16 px-6">
      {/* Top Dots */}
      <div className="flex justify-center gap-6 mb-8">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-xl font-semibold text-center mb-2">
        Standards and principles nurture success
      </h2>

      {/* Underline */}
      <div
        className="w-74 h-[2px] bg-[#F16624] mx-auto mb-10"
        style={{ transformOrigin: "left" }}
      />

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="../../public/image/tower.jpg"
            alt="FAQ"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right FAQ List */}
        <div className="w-full md:w-1/2 space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-[#00ADB1]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#00ADB1]" />
                  )}
                  <span className="font-medium">{faq.question}</span>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-2">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
