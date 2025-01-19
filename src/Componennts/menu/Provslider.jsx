import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Provslider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={0}
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
       <SwiperSlide><img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Provenance%20Ghost-min.png/jcr:content/renditions/original" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Provenance%20Phantom-min.png/jcr:content/renditions/original" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Provenance%20Cullinan-min.png/jcr:content/renditions/original" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Provenance%20Dawn-min.png/jcr:content/renditions/original" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Provenance%20Wraith-min.png/jcr:content/renditions/original" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
