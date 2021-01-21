import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { PictureImg } from '@components/ui';

function Hero({ hero }) {
  const { link } = hero;
  return (
    <>
      {link ? (
        <Link href={link}>
          <a className="w-full" target="_blank">
            <PictureImg img={hero} />
          </a>
        </Link>
      ) : (
        <PictureImg img={hero} />
      )}
    </>
  );
}

Hero.propTypes = {
  hero: PropTypes.shape({
    desktop: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    mobile: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    link: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
};
export default Hero;
