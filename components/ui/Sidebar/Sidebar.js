import React, { useEffect, useRef, useState } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import Portal from '@reach/portal';
import LABELS from '../../../CONSTANTS';
import s from './Sidebar.module.css';

function Sidebar({ open = false, onClose }) {
  const ref = useRef();
  const [animation, setAnimation] = useState('opacity-0');

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
        setAnimation('transition opacity-100 animate-slideLeft w-max');
      } else {
        enableBodyScroll(ref.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  function handleClose() {
    setAnimation('opacity-0 delay-100 animate-slideRight w-max');
    setTimeout(() => {
      onClose();
    }, 300);
  }

  return (
    <>
      {open ? (
        <div className={s.root} ref={ref}>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={handleClose}
            />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none ">
              <div className="h-full md:w-screen md:max-w-md">
                <div
                  className={`h-full  text-base bg-accents-1 shadow-xl overflow-y-auto transform transition opacity-0 ${animation}`}
                >
                  <div className="w-80">
                    <div className="divide-y divide-gray-300 divide-solid text-gray-500">
                      <div className="flex">
                        <div className="w-6/12 py-5 pl-5">
                          <span className="ml-3 font-bold">MENU</span>
                        </div>

                        <div className="w-6/12 py-5 pr-5 text-right">
                          <a className="p-3 w-8" href="#" onClick={handleClose}>
                            <i className="far fa-times-circle text-xl"></i>
                          </a>
                        </div>
                      </div>
                      <div className="divide-y-4 divide-yellow-600 divide-dashed"></div>
                    </div>

                    {LABELS.mobileMenu.map((item, index) => {
                      const { label, url, icon } = item;
                      return (
                        <div
                          className="divide-y divide-gray-300 divide-solid transition duration-500 ease-in-out bg-blue-600 translate-x-24 delay-700"
                          key={index}
                        >
                          <div className="flex">
                            <a
                              className="py-5 pl-10 w-full text-gray-500 "
                              href={url}
                            >
                              <i className={icon}></i>
                              <span className="ml-5">{label}</span>
                            </a>
                          </div>
                          <div className="divide-y-4 divide-yellow-600 divide-dashed"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Sidebar;
