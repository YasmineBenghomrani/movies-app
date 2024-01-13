import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import CardMovie from "./CardMovie";

export default function HorizontalSwiper({ medias }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {medias.map((e) => {
          return (
            <SwiperSlide className="swiper-media" key={e.id}>
              <CardMovie media={e} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
