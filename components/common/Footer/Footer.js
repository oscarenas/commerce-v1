import React from 'react';
import { Container } from '@components/ui';
import { shareSocial, shareMail, sharePhone } from '@lib/shareLinks';

function Footer(props) {
  const { data } = props;
  const social = shareSocial(data);
  const date = new Date();

  return (
    <footer>
      <div className="bg-gray-100 md:pt-10 md:pb-5  xs:pt-10 xs:pb-5">
        <Container>
          <div className="relative border-solid border-b border-gray-200 mb-8">
            <div className="flex md:justify-evenly sm:flex-wrap xs:flex-col">
              <div className="py-3 sm:text-center xs:justify-center xs:w-full sm:w-1/3 xs:flex xs:h-14">
                <div className="sm:text-3xl xs:text-lg mb-5 xs:mr-3 text-gray-600">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="sm:text-lg xs:text-lg text-gray-500 font-semibold">
                  {data.direccion}
                </span>
              </div>

              <div className="py-3 sm:text-center xs:justify-center xs:w-full sm:w-1/3 xs:flex xs:h-14">
                <div className="sm:text-3xl xs:text-lg mb-5 xs:mr-3 text-gray-600">
                  <i className="far fa-envelope"></i>
                </div>
                <a href={shareMail(data.correo)}>
                  <span className="sm:text-lg xs:text-lg text-gray-500 font-semibold">
                    {data.correo}
                  </span>
                </a>
              </div>

              <div className="py-3 sm:text-center xs:justify-center xs:w-full sm:w-1/3 xs:flex xs:h-14">
                <div className="sm:text-3xl xs:text-lg mb-5 xs:mr-3 text-gray-600">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <a href={sharePhone(data.telefono)}>
                  <span className="sm:text-lg xs:text-lg text-gray-500 font-semibold">
                    {data.telefono}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center  text-gray-600 flex-wrap">
            {social && <SocialButton data={social} />}
          </div>
          <div className="flex justify-center text-gray-400">
            <span>{data.titulo}</span>
          </div>
          <div className="flex justify-center text-gray-400">
            <small>© {date.getFullYear()}</small>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export const SocialButton = ({ data }) =>
  data.map((item, index) => {
    const { label, url, icon } = item;
    return (
      <div
        key={index}
        className="text-3xl sm:mb-8 xs:mb-12 rounded-full shadow text-center mx-2 content-center self-center justify-center flex bg-gray-600"
      >
        <a
          className="my-2 mx-2 text-white text-4xl w-10 h-10"
          href={url}
          title={label}
          target="_blank"
        >
          <i className={icon}></i>
        </a>
      </div>
    );
  });

export default Footer;
