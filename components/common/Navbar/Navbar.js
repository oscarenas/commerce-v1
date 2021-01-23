import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LABELS from '@utils/CONSTANTS/LABELS';
import { Sidebar } from '@components/ui';

function Navbar(props) {
  const { logo, titulo } = props;
  const [activeItem, setActiveItem] = useState('/');
  const [openSlide, setOpenSlide] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item =
        window.location.pathname.split('/')[1] === ''
          ? 'inicio'
          : window.location.pathname.split('/')[1];
      setActiveItem(item);
    }

    setOpenSlide(false);
  }, []);

  function closeSidebar(e) {
    setOpenSlide(false);
  }
  function openMenu() {
    setOpenSlide((prev) => !prev);
  }

  return (
    <div className="w-full shadow-menu-light fixed z-50 bg-white">
      <div className="md:pt-6 sm:pt-2 xs:pt-4 px-4 sm:px-6 lg:px-8 pb-2">
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
                  onClick={openMenu}
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
      <hr />
      <Sidebar open={openSlide} onClose={closeSidebar}></Sidebar>
    </div>
  );
}

export default Navbar;
