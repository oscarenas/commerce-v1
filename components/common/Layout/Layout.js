import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';

const SEO = {
  seo: {
    pagina: 'Monopatin',
    titulo: 'Monopatin Skate shop 🐵',
    descripcion:
      'Distribuidora de ropa y tennis importados para deportes extremos.',
    logo:
      'https://res.cloudinary.com/oscarenas/image/upload/v1610853393/store/monopatin.png',
    correo: 'oscarenas@gmail.com',
    telefono: '3124567890',
    direccion: 'Calle 93 #11-52 - Bogota, Colombia',
    whatsapp: '3124567890',
    messenger: false,
    instagram: 'https://instagram/cerveza',
    facebook: 'https://www.facebook.com/Cerveza',
    twitter: 'https://twitter.com/UsuarioBici',
    youtube: false,
    snapchat: false,
    linkedin: false,
    tiktok: false,
  },
};

function Layout(props) {
  const { children } = props;
  return (
    <div className="h-12 w-full font-body">
      <Navbar logo={SEO.seo.logo} titulo={SEO.seo.titulo} />
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
