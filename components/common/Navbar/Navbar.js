import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LABELS from '../../../CONSTANTS';
import { activeItemMenu } from '../../../lib/utils';

function Navbar(props) {
  const { logo, titulo } = props;
  const [activeItem, setActiveItem] = useState('/');

  useEffect(() => {
    const path = () => {
      if (typeof window !== 'undefined') {
        return window.location.pathname.split('/')[1] === '' ? 'inicio' : path;
      }
    };

    setActiveItem(path());
    console.log(path());
  }, []);

  return (
    <div className="w-full shadow-menu-light pb-3 fixed mb-1 z-50 bg-white">
      <div className="md:pt-6 sm:pt-2 xs:pt-4 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start max-w-7xl mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">{titulo}</span>
                <img className="h-12" src={logo} alt={titulo} height="40" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  id="main-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">{LABELS.menuLabel}</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {activeItem &&
              LABELS.topMenu.map((item, index) => {
                const { label, url } = item;
                return (
                  <Link href={url} key={index}>
                    <a
                      className={`${
                        label.toLocaleLowerCase() === activeItem
                          ? 'font-bold text-gray-800 hover:text-gray-800 border-b-4 border-gray-800 py-4 px-2'
                          : 'font-medium text-gray-500 hover:text-gray-600 py-4 px-2'
                      }`}
                    >
                      {label}
                    </a>
                  </Link>
                );
              })}
            <a
              href="#"
              className="p-3 font-medium text-gray-500 hover:text-gray-900  py-4 px-2"
            >
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1" role="none">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                role="menuitem"
              >
                Inicio
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                role="menuitem"
              >
                Tienda
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                role="menuitem"
              >
                Carrito
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                role="menuitem"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
