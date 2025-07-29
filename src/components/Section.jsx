


export default function Section() {
  return (
    <div
      className="bg-[#081D30] text-white py-16 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Top 3 dots */}
      <div className="flex justify-center gap-6 mb-8">
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-10">
        Innovation drives transformation
      </h2>

      {/* Underline */}
      <div className="w-74 h-[2px] bg-[#F16624] mx-auto mb-10" />

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Image */}
        <div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="../../public/image/machine.jpg"
            alt="Innovation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Paragraph */}
        <div
          className="w-full md:w-1/2 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            At the heart of progress lies innovation. Our approach is not just
            about adapting to the future — it's about actively shaping it.
            With a commitment to cutting-edge technologies, bold thinking, and
            user-centric design, we empower businesses to break barriers.
            From digital product strategy to flawless execution, we partner
            with you to drive real impact. Our experienced team brings
            visionary ideas to life through agile processes and continuous
            collaboration. Join us in redefining what's possible.
          </p>
        </div>
      </div>
    </div>
  );
}
