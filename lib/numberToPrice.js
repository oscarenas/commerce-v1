const numberToPrice = (number) => {
  const formatter = new Intl.NumberFormat();
  return `$ ${formatter.format(number)}`;
};

export default numberToPrice;