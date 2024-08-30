import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Pic from "../../src/Assets/img/Ellipse 8.png";
import bg from "../../src/Assets/img/Group 168.png";

const testimonials = [
  {
    id: 1,
    quote:
      "Uptown Cleaning Services transformed our office. Their attention to detail is unmatched!",
    name: "John D.",
    title: "Office Manager",
    image: Pic,
  },
  {
    id: 2,
    quote:
      "Reliable, efficient, and eco-friendly. Uptown Cleaning is our go-to for janitorial services.",
    name: "Sarah K.",
    title: "HR Director",
    image: Pic,
  },
  {
    id: 3,
    quote:
      "The team is professional and always on time. They keep our workspace looking great.",
    name: "Michael P.",
    title: "CEO",
    image: Pic,
  },
  {
    id: 4,
    quote:
      "The team is professional and always on time. They keep our workspace looking great.",
    name: "Michael P.",
    title: "CEO",
    image: Pic,
  },
  {
    id: 4,
    quote:
      "The team is professional and always on time. They keep our workspace looking great.",
    name: "Michael P.",
    title: "CEO",
    image: Pic,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 !container mx-auto !px-5 md:px-0">
      <div className="text-center mb-24">
        <h2 className=" text-2xl md:text-4xl lg:text-5xl xl:text-[55px] font-bold lg:leading-[65px]">
          What <span className="text-[#158842] ">client </span>
          have to say about us?
        </h2>
      </div>
      <div className=" ">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000, // Set the delay between transitions
            disableOnInteraction: false, // Keeps autoplay running after user interaction
          }}
          spaceBetween={30}
          // slidesPerView={1}
          loop={true}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-green-600 text-white p-6 rounded-2xl  relative">
                <div className="mb-4">
                  <img
                    className="w-36 h-36 rounded-tr-2xl absolute top-0 right-0"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <img src={bg} alt="" className="mb-14" />
                <blockquote className="text-xl italic font-semibold mb-4">
                  “{testimonial.quote}”
                </blockquote>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom CSS for default navigation buttons */}
        <style jsx>{`
          .swiper-button-prev,
          .swiper-button-next {
            background-color: white;
            color: #158842;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background-color: #158842;
            color: white;
          }

          .swiper-button-prev {
            left: 10px;
          }

          .swiper-button-next {
            right: 10px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;
