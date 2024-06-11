const formatPrice = (price: number) => {
  const reversedPrice = price.toString().split('').reverse();
  let formattedPrice = '';

  reversedPrice.forEach((elem, index) => {
    formattedPrice += elem + (index !== 0 && index % 3 === 0 ? ' ' : '');
  });

  return formattedPrice.split('').reverse().join('');
};

export default formatPrice;
