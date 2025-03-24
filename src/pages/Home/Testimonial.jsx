import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import HeadingSection from "../../components/HeadingSection";
import { testimonials } from "../../utils/testimonialArray";
import { FaArrowRightLong,FaArrowLeftLong  } from "react-icons/fa6";
const Testimonial = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButtonPrev, setActiveButtonPrev] = useState(false);
  const [activeButtonNext, setActiveButtonNext] = useState(true);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="section-container">
      <HeadingSection
        heading={'Trusted by Thousands of Happy Customer'} description={'dThese are the stories of our customers who have joined us with great pleasure when using this crazy feature.'}
      />
      <div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          navigation={false}
          modules={[Pagination]}
          className="mySwiper relative md:max-w-7xl mx-auto rounded mb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="px-8 py-4 shadow-sm shadow-red-500 my-2 mx-2 hover:shadow-md transition-transform duration-300 rounded-md h-[200px]">
                <div className="space-y-3">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-bold text-md">{item.name}</h3>
                        <p className="text-sm">{item.title}</p>
                      </div>
                    </div>
                    <div>{item.reviews}</div>
                  </div>
                  <div>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between items-center">

          {/* custom pagination */}
          <div className="flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  
                  // Remove any restrictive condition on the index
                  if (index >= 0 && index < testimonials.length - 2) {
                    swiperRef.current.slideTo(index);
                    setActiveIndex(index);
                  }
                }}
                className={`mx-1 w-3 h-3 rounded-md ${
                  activeIndex === index ? "bg-red-500 cursor-pointer w-8" : "bg-gray-300 cursor-pointer"
                } ${index >= testimonials.length - 2 ? "hidden" : ""}`}
              />
            ))}
          </div>

          {/* custom next & previous button */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                handlePrev();
                setActiveButtonPrev(true);
                setActiveButtonNext(false);
              }}
              className={`text-red-500 cursor-pointer px-4 py-4 rounded-full ${activeButtonPrev ? "bg-red-500 rounded-full text-white":"border-red-500 border-2"}`}
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={() => {
                handleNext();
                setActiveButtonPrev(false);
                setActiveButtonNext(true);
              }}
              className={`text-red-500 cursor-pointer px-4 py-4 rounded-full ${activeButtonNext ? "bg-red-500 rounded-full text-white":"border-red-500  border-2"}`}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
