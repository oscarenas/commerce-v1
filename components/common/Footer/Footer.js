import React from 'react';
import { Container } from '@components/ui';

function Footer() {
  const date = new Date();
  return (
    <footer>
      <div className="bg-gray-100 md:pt-10 md:pb-5  xs:pt-10 xs:pb-5">
        <Container>
          <div className="flex justify-center  text-gray-600">
            <div className="mx-4 text-4xl">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </div>

            <div className="mx-4 text-4xl">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="mx-4 text-4xl">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>

            <div className="mx-4 text-4xl">
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-5 text-gray-400">
            <small>Monopatin Skate Shop</small>
          </div>
          <div className="flex justify-center text-gray-400">
            <small>Calle 93 #11-52 - Bogota, Colombia</small>
          </div>
          <div className="flex justify-center text-gray-400 mt-2">
            <small>© {date.getFullYear()}</small>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
