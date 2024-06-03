interface IMenuItem {
  key: number;
  name: string;
  path: string;
}

const menuData: IMenuItem[] = [
  { key: 1, name: 'Найти подрядчика', path: '/contractors' },
  { key: 2, name: 'Найти собственника', path: '/owners' },
  { key: 3, name: 'О платформе', path: '/' },
];

export default menuData;
