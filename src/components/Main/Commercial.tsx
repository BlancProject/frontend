'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Commercial() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        slidesPerView={1} // 스와이프 한페이지당 보여질 개수
        spaceBetween={30}
        autoplay={{
          // 자동 넘김
          delay: 2500,
          disableOnInteraction: false,
        }}
        // effect={'fade'}
        loop={true} //무한 뤂
        navigation={true} // ?
        centeredSlides={true} // ?
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image
            src="/img/commercial1.png"
            alt="commercial1"
            width={1000}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/commercial2.png"
            alt="commercial2"
            width={1000}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/commercial3.png"
            alt="commercial3"
            width={1000}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/commercial4.png"
            alt="commercial4"
            width={1000}
            height={200}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
