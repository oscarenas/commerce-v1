import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import Footer from '../Footer';

function Layout(props) {
  const { children } = props;
  return (
    <div className="h-12 w-screen font-body">
      <Navbar />
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
