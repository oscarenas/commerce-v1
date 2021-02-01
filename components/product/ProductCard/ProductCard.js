import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@components/ui';
import getSlug from '@lib/getSlug';
import numberToPrice from '@lib/numberToPrice';
import LABELS from '@utils/CONSTANTS/LABELS';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  const {
    stock,
    sku,
    mediaImagen1,
    mediaImagen2,
    nombre,
    nuevoProducto,
    precioVenta,
    precioPromo,
    promocion,
  } = product;

  const [imgBack, setImgBack] = useState(mediaImagen1);

  function handlerClick(e) {
    if (e.target.tagName === 'BUTTON' || e.target.dataset.el === 'button') {
      e.preventDefault();
      // Add item to the cart
    }
  }

  return (
    <div className="xs:w-44 sm:max-w-2xl lg:w-72 iPad-portrait:w-80 iPadPro-portrait:w-96 iPad-landscape:w-52 sm-landscape:w-72 sm:w-40 mx-auto mb-20 xs:mb-10">
      <Link href={`/producto/${sku}/${getSlug(nombre)}`}>
        <a
          onMouseEnter={() => setImgBack(mediaImagen2)}
          onMouseLeave={() => setImgBack(mediaImagen1)}
          onClick={handlerClick}
        >
          <div className="rounded bg-white hover:shadow-product-card transition overflow-hidden xs:mb-10">
            <div className="sm:h-72 xs:h-36 xs:mb-4 relative">
              <img
                className="absolute h-full w-full object-cover object-center transition"
                src={imgBack}
                alt={nombre}
              />
              {nuevoProducto && (
                <div className="text-xs bg-violet text-white absolute ml-3 mt-3 px-2 py-1 font-medium rounded-sm">
                  {LABELS.newItemLabel}
                </div>
              )}

              {!stock && (
                <div className="text-xs bg-gray-50 border-red border text-red absolute mr-3 mt-3 px-2 py-1 font-medium rounded-sm right-0">
                  {LABELS.outStockLabel}
                </div>
              )}
            </div>
            <div className="sm:p-4 xs:px-1 text-center mb-5">
              <header className="mb-5 sm:h-10 xs:h-auto my-auto">
                <h3 className="text-sm font-semibold text-gray-600 sm:leading-7 xs:leading-5">
                  {nombre}
                </h3>
              </header>
              <div className="mb-5">
                {promocion ? (
                  <>
                    <span className="text-gray-500 my-4 line-through text-sm mr-3 xs:h-full xs:block xs:mb-0">
                      {numberToPrice(precioVenta)}
                    </span>
                    <span
                      className={`text-xl font-semibold my-4 text-red ${
                        stock ? '' : 'opacity-70'
                      }`}
                    >
                      {numberToPrice(precioPromo)}
                    </span>
                  </>
                ) : (
                  <span className="text-xl font-semibold my-4 text-gray-700">
                    {numberToPrice(precioVenta)}
                  </span>
                )}
              </div>
              <div className="z-10">
                <Button
                  aria-label="Button Component"
                  className="xs:text-sm"
                  loading={false}
                  disabled={!stock}
                  Component="button"
                  onClick={handlerClick}
                >
                  <i data-el="button" className="fas fa-cart-plus"></i>
                  <span data-el="button" className="ml-2">
                    {LABELS.addItemLabel}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    stock: PropTypes.bool,
    sku: PropTypes.string,
    mediaImagen1: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    mediaImagen2: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    nombre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    nuevoProducto: PropTypes.bool,
    precioVenta: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    precioPromo: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    promocion: PropTypes.bool,
  }),
};

export default ProductCard;
