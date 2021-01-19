import React from 'react';

function Container({ children }) {
  return (
    <div className="2xl:container xl:container lg:container md:container mx-auto">
      <div className="md:mx-10 xs:mx-3">{children}</div>
    </div>
  );
}

export default Container;
