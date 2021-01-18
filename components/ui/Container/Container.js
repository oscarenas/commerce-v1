import React from 'react';

function Container({ children }) {
  return (
    <div className="container md:container md:mx-auto">
      <div className="sm:container xs:mx-5 sm:mx-5 md:mx-0 lg:mx-0">
        {children}
      </div>
    </div>
  );
}

export default Container;
