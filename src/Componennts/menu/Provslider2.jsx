import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Provslider2.scss';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Provslider2() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
<img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Bespoke%20Carousel%2002-min.png/jcr:content/renditions/original" />
        </SwiperSlide>
        <SwiperSlide>
<img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Bespoke%20Carousel%2005-min.png/jcr:content/renditions/original" />
        </SwiperSlide>
        <SwiperSlide>
<img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Bespoke%20Carousel%2003-min.png/jcr:content/renditions/original" />
        </SwiperSlide>
        <SwiperSlide>
<img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Bespoke%20Carousel%2001-min.png/jcr:content/renditions/original" />
        </SwiperSlide>
        <SwiperSlide>
<img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/provenance_2023/Bespoke%20Carousel%2004-min.png/jcr:content/renditions/original" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
