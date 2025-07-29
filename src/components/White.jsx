
import { useNavigate } from "react-router-dom";


const fadeInUp = {
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

export default function White() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white text-black py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="flex justify-center gap-6 mb-8">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        ))}
      </div>

      <h2
        className="text-3xl font-semibold text-center mb-2"
        variants={fadeInUp}
      >
        Turnkey Testing & Commissioning <br />
        Services
      </h2>

      <div className="w-74 h-[2px] bg-[#F16624] mx-auto mb-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Side */}
        <div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="../../public/image/volt.png"
            alt="About"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Side */}
        <div
          className="w-full md:w-1/2 text-lg leading-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Referring to the diversity in the project needs, the commissioning process takes a critical path to assure that all systems and components of a building are designed, installed, tested, operated, and maintained according to the operational requirements of the owner or final client.
          </p>
          <br />
          <p>
            In practice, the commissioning process comprises the integrated application of a set of engineering techniques and procedures to check, inspect and test every operational requirement of the project, from individual functions, such as instruments and equipment, up to complex amalgamations of modules, subsystems and systems.
          </p>
          <br />
          <p>
            Commissioning activities, in the broader sense, are applicable to all phases of the project, from the basic and detailed design, procurement, construction and assembly, until the final handover of the unit to the owner, including in certain projects an assisted operational phase as well.
          </p>

          <div
            className="mt-4 flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/projects")}
              className="px-6 py-1 text-white bg-[#00ADB1] border-2 border-[#00ADB1] rounded transition-transform duration-300 hover:text-[#F16624]"
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
