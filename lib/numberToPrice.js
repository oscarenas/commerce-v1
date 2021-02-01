const numberToPrice = (number) => {
  const formatter = new Intl.NumberFormat({
    style: 'currency',
  });
  return `$ ${formatter.format(number)}`;
};

export default numberToPrice;
