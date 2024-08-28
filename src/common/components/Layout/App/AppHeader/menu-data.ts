interface IMenuItem {
  key: number;
  name: string;
  path: string;
  activePath: string[];
}

const menuData: IMenuItem[] = [
  { key: 1, name: 'О платформе', path: '/', activePath: ['/'] },
  {
    key: 2,
    name: 'Найти подрядчика',
    path: '/contractors',
    activePath: ['/contractors', '/contractor'],
  },
  { key: 3, name: 'Найти собственника', path: '/tenders', activePath: ['/tenders', '/tender'] },
];

export default menuData;
