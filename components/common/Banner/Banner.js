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
import { PictureImg } from '@components/ui';
import PropTypes from 'prop-types';

function Banner({ images }) {
  console.log(images);

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
        {images &&
          images.map((item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <Slides banner={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

function Slides({ banner }) {
  const { link } = banner;

  return (
    <>
      {link ? (
        <Link href={link}>
          <a className="w-full" target="_blank">
            <PictureImg img={banner} />
          </a>
        </Link>
      ) : (
        <PictureImg img={banner} />
      )}
    </>
  );
}

Banner.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      desktop: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      mobile: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      desc: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      link: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    })
  ),
};
export default Banner;
