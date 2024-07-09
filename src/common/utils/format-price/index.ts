const formatNumber = (price?: number) => {
  if (!price) return '';
  return new Intl.NumberFormat('ru-RU').format(price);
};

export default formatNumber;
