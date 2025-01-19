import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Boutique.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BotSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       <div className="sliderdiv">
        <SwiperSlide><img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/replica-model-car-generic/components/rolls-royce-bbghost-d-min.jpg/jcr:content/renditions/cq5dam.web.2880.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/replica-model-car-generic/components/rolls-royce-bbcullinan-d-min.jpg/jcr:content/renditions/cq5dam.web.2880.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/replica-model-car-generic/components/rolls-royce-ghost-d-min.jpg/jcr:content/renditions/cq5dam.web.2880.webp" alt="" /></SwiperSlide>
       </div>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="0.1"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
