import React from 'react';
import { ProductCard } from '@components/product';
const grid = 4;

function HomeProducts(props) {
  const { products } = props;

  return (
    <div className="mb-12">
      <ProductList data={products} />
    </div>
  );
}

function ProductList({ data }) {
  const numRows = createRange(data);

  const rows = numRows.map((item, index) => {
    const { first, last } = item;
    const rangeGrid = data.slice(first, last);
    return (
      <div
        key={index}
        className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 sm:mb-0"
      >
        {rangeGrid.map((prod, index) => {
          return <ProductCard key={index} product={prod} />;
        })}
      </div>
    );
  });

  return <>{rows}</>;
}

function createRange(array) {
  let cols = array.length;
  let steps = cols % grid === 0 ? cols / grid : parseInt(cols / grid + 1, 10);
  let range = [];

  for (let i = 0; i < steps; i++) {
    if (i) {
      if (i + 1 === steps) {
        range.push({ first: i * grid, last: cols });
      } else {
        range.push({ first: i * grid, last: (i + 1) * grid });
      }
    } else {
      range.push({ first: 0, last: grid });
    }
  }

  return range;
}

export default HomeProducts;
