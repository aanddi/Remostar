interface IMenuItem {
  key: number;
  name: string;
  path: string;
}

const menuData: IMenuItem[] = [
  { key: 1, name: 'О платформе', path: '/' },
  { key: 2, name: 'Найти подрядчика', path: '/contractors' },
  { key: 3, name: 'Найти собственника', path: '/tenders' },
];

export default menuData;
