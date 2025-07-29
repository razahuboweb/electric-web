
import { Linkedin, Twitter } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Kristin Watson",
    title: "VP, Human Resources",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Emma Dorsey",
    title: "Senior Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alicia Bell",
    title: "Junior Copywriter",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rachel Green",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    name: "Sarah Smith",
    title: "UI Designer",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    name: "Laura James",
    title: "Marketing Lead",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    name: "Olivia Brown",
    title: "Project Coordinator",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Sophia Wilson",
    title: "Creative Strategist",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
  },
];

const Team = () => {
  return (
    <section
      className="bg-[#081D30] py-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-white text-3xl font-bold mb-10 text-center">
        Our Team
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ el: ".team-pagination", clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-[#1c2431] rounded-xl p-6 text-center flex flex-col items-center shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 object-cover rounded-full mb-4"
              />
              <h3 className="text-white text-lg font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-400 mb-4">{member.title}</p>
              <div className="flex gap-4 justify-center">
                <button className="text-gray-300 hover:text-white">
                  <Twitter size={20} />
                </button>
                <button className="text-gray-300 hover:text-white">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots below cards */}
      <div className="team-pagination mt-8 flex justify-center gap-2"></div>
    </section>
  );
};

export default Team;
