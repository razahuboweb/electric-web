
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Serhiy Hipskyy",
    title: "CEO Universal",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
  {
    name: "Justus Menke",
    title: "CEO Eronaman",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
  {
    name: "Britain Eriksen",
    title: "CEO Universal",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
  {
    name: "Olivia Brooks",
    title: "Founder Creativo",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
  {
    name: "Liam Carter",
    title: "CTO Skycore",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Which is what our popular{" "}
          <span className="text-black font-extrabold">customers are saying</span>
        </h2>

        <p
          className="text-gray-500 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ el: ".custom-swiper-pagination", clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-[#081D30] shadow-md rounded-xl p-6 text-left border border-gray-700 h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-white mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-swiper-pagination mt-8 flex justify-center gap-2"></div>
      </div>
    </section>
  );
};

export default Testimonials;
