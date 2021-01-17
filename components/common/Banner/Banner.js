import React from 'react';
import Link from 'next/link';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Virtual,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay]);
import { Swiper, SwiperSlide } from 'swiper/react';

function Banner({ images }) {
  return (
    <div className="-mt-1 mb-8">
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        initialSlide={0}
        lazy={true}
        autoHeight={true}
        updateOnWindowResize={true}
        preloadImages={true}
        updateOnImagesReady={true}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Slides banner={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Slides({ banner }) {
  return (
    <>
      {banner.bannerLink ? (
        <Link href={banner.bannerLink}>
          <a className="w-full">
            <Pic item={banner} />
          </a>
        </Link>
      ) : (
        <Pic item={banner} />
      )}
    </>
  );
}

function Pic({ item }) {
  return (
    <picture className="w-full">
      <source media="(min-width: 768px)" srcSet={item.bannerEscritorio} />
      <source media="(min-width: 320px)" srcSet={item.bannerMobile} />
      <img
        src={item.bannerEscritorio}
        alt={item.bannerDescripcion}
        width="100%"
        height="100%"
      />
    </picture>
  );
}

export default Banner;
