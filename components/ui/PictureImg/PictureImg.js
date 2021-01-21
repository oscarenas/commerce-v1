import React from 'react';
import PropTypes from 'prop-types';

function PictureImg({ img }) {
  const { desktop, mobile, desc } = img;
  return (
    <picture className="w-full">
      <source media="(min-width: 768px)" srcSet={desktop} />
      <source media="(min-width: 320px)" srcSet={mobile} />
      <img src={desktop} alt={desc} width="100%" />
    </picture>
  );
}

PictureImg.propTypes = {
  img: PropTypes.shape({
    desktop: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    mobile: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
};
export default PictureImg;
