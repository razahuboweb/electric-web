import { useNavigate } from "react-router-dom";


const SmallHero = ({
  backgroundImage = "/image/water1.jpg",
  buttonText = "Recommend an action",
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div
      className="w-full h-[60vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className="text-4xl font-bold flex items-center justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[#1DB7B2]">S</span>
          <span className="text-[#1DB7B2]">T</span>
          <span className="text-orange-500">E</span>
          <span className="text-[#1DB7B2]">D</span>
        </div>

        <p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Committed to Climate Action, encouraging SDG and ESG Practices.
        </p>

        <button
          onClick={handleButtonClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 border-2 border-[#00ADB1] rounded transition-transform duration-300 hover:text-[#F16624] font-medium"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SmallHero;
