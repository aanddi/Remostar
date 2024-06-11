const categories = [
  { id: 1, name: '1 комнатная', count: undefined },
  { id: 2, name: '2 комнатная', count: undefined },
  { id: 3, name: '3 комнатная', count: undefined },
];

const sortOptions = [
  { label: 'по популярности', value: 'popularity' },
  { label: 'по бюджету (сначала дороже)', value: 'maxRating' },
  { label: 'по бюджету (сначала дешевле)', value: 'minRating' },
  { label: 'по метрожу (сначала больше)', value: 'maxSize' },
  { label: 'по метрожу (сначала меньше)', value: 'minSize' },
];

export { categories, sortOptions };
