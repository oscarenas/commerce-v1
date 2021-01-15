import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import Footer from '../Footer';

function Layout(props) {
  const { children } = props;
  return (
    <div className="h-12 w-full font-body">
      <Navbar />
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
