import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="w-full h-[550px]">
              <img
                className="w-full h-full object-cover"
                src={banner1}
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1>Volunteer....</h1>
              <p>Lorem ipsum dolor sit.</p>
              <button>See More!</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-full h-[550px]">
              <img
                className="w-full h-full object-cover"
                src={banner2}
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1>Volunteer....</h1>
              <p>Lorem ipsum dolor sit.</p>
              <button>See More!</button>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-full h-[550px]">
              <img
                className="w-full h-full object-cover"
                src={banner3}
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0">
              <h1>Volunteer....</h1>
              <p>Lorem ipsum dolor sit.</p>
              <button>See More!</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
