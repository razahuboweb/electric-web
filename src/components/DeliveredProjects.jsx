

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const DeliveredProjects = () => {
  return (
    <div
      className="bg-[#04182B] text-white py-20 px-4 md:px-20"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0}
    >
      {/* Dots */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="w-5 h-5 rounded-full bg-[#00ADB1]"></div>
        <div className="w-5 h-5 rounded-full bg-[#00ADB1]"></div>
        <div className="w-5 h-5 rounded-full bg-[#00ADB1]"></div>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl font-light mb-2">Sted, Delivered Projects</h2>

      {/* Underline */}
      <div className="w-[300px] h-[2px] bg-orange-500 mx-auto mb-10" />

      {/* List Grid */}
      <div className="grid md:grid-cols-2 gap-8 text-sm leading-7 max-w-6xl mx-auto">
        {/* Left Column */}
        <ul
          className="list-disc list-inside space-y-1"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <li>King Abdul Aziz Center For World Culture – Dahran</li>
          <li>King Faisal Hospital & Research Center – Riyadh</li>
          <li>Sharma Site 2 – Neom City</li>
          <li>Qiddiyah Water Park</li>
          <li>Neom Bay Airport – Neom City</li>
          <li>Rail Way Stations Line 3 – Riyadh</li>
          <li>Umluj Island</li>
          <li>Prince Saud Villa – Riyadh</li>
          <li>Art Oasis Museum – Diriyah</li>
          <li>Red Sea Week Sindalah – Neom City</li>
          <li>King Abdullah Financial District, Tunnel – Riyadh</li>
          <li>King Abdullah Financial District, Parcel CP04 – Riyadh</li>
          <li>King Abdullah Financial District, Parcel 2.14 – Riyadh</li>
          <li>The Avenue’s Mall</li>
          <li>Via Riyadh</li>
        </ul>

        {/* Right Column */}
        <ul
          className="list-disc list-inside space-y-1"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <li>King Abdullah Financial District, Parcel 3.04 – Riyadh</li>
          <li>King Abdullah Financial District, Parcel 3.05 – Riyadh</li>
          <li>King Abdullah Financial District, Parcel 5.07 – Riyadh</li>
          <li>King Abdullah Financial District, Parcel 5.08 – Riyadh</li>
          <li>Neom Admin Offices – Neom City</li>
          <li>Security Forces Medical Center – Riyadh</li>
          <li>Yacht Club, Formula 1 – Jeddah</li>
          <li>World Defense Show WDS – Riyadh</li>
          <li>Saudia Mall – Riyadh</li>
          <li>U-Walk – Jeddah</li>
          <li>Wadi Safar – Dariyah Gate – Riyadh</li>
          <li>Bujari – Riyadh</li>
          <li>Gems – Dahran</li>
          <li>Prince Khaled Villa</li>
          <li>
            <em>Many Other Confidential, Complex and MEGA Projects.</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveredProjects;
