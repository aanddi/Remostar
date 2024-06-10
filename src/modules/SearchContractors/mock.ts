const contartors = [
  {
    id: 1,
    name: 'Ремстрой',
    verify: true,
    reviews: {
      starCount: 5.1,
      commentCount: 12,
    },
    city: 'Симферополь',
    contartorType: 'Юридическое лицо',
    desc: 'Мы - опытные специалисты, готовые взять на себя любые вызовы в мире ремонта и обновления. Наш коллектив состоит из талантливых ремонтников, каждый из которых является профессионалом в своей области. Наша команда гордится слаженным взаимодействием и высоким качеством предоставляемых услуг....',
    tags: [
      { id: 1, name: 'Ремонт под ключ' },
      { id: 2, name: 'Ремонт под ключ' },
      { id: 3, name: 'Ремонт под ключ' },
    ],
    services: {
      list: [
        { id: 1, name: 'Комплексный ремонт', salary: 1200 },
        { id: 2, name: 'Комплексный ремонт', salary: 1200 },
        { id: 3, name: 'Комплексный ремонт', salary: 1200 },
        { id: 4, name: 'Комплексный ремонт', salary: 1200 },
      ],
      count: 12,
    },
  },
  {
    id: 2,
    name: 'Ремстрой',
    verify: false,
    reviews: {
      starCount: 4.5,
      commentCount: 16,
    },
    city: 'Симферополь',
    contartorType: 'Физическое лицо',
    desc: 'Мы - опытные специалисты, готовые взять на себя любые вызовы в мире ремонта и обновления. Наш коллектив состоит из талантливых ремонтников, каждый из которых является профессионалом в своей области. Наша команда гордится слаженным взаимодействием и высоким качеством предоставляемых услуг....',
    tags: [
      { id: 1, name: 'Ремонт под ключ' },
      { id: 2, name: 'Ремонт под ключ' },
      { id: 3, name: 'Ремонт под ключ' },
    ],
    services: {
      list: [
        { id: 1, name: 'Комплексный ремонт', salary: 1200 },
        { id: 2, name: 'Комплексный ремонт', salary: 1200 },
        { id: 3, name: 'Комплексный ремонт', salary: 1200 },
        { id: 4, name: 'Комплексный ремонт', salary: 1200 },
      ],
      count: 12,
    },
  },
  {
    id: 3,
    name: 'Ремстрой',
    verify: true,
    reviews: {
      starCount: 3.5,
      commentCount: 23,
    },
    city: 'Симферополь',
    contartorType: 'Юридическое лицо',
    desc: 'Мы - опытные специалисты, готовые взять на себя любые вызовы в мире ремонта и обновления. Наш коллектив состоит из талантливых ремонтников, каждый из которых является профессионалом в своей области. Наша команда гордится слаженным взаимодействием и высоким качеством предоставляемых услуг....',
    tags: [
      { id: 1, name: 'Ремонт под ключ' },
      { id: 2, name: 'Ремонт под ключ' },
      { id: 3, name: 'Ремонт под ключ' },
    ],
    services: {
      list: [
        { id: 1, name: 'Комплексный ремонт', salary: 1200 },
        { id: 2, name: 'Комплексный ремонт', salary: 1200 },
        { id: 3, name: 'Комплексный ремонт', salary: 1200 },
        { id: 4, name: 'Комплексный ремонт', salary: 1200 },
      ],
      count: 12,
    },
  },
];

const popularContartors = [
  { id: 1, name: 'Ремостар', verify: true, src: 'src/assets/Contractors/default-avatar.png' },
  { id: 2, name: 'Ремостар', verify: true, src: 'src/assets/Contractors/default-avatar.png' },
  { id: 3, name: 'Ремостар', verify: true, src: 'src/assets/Contractors/default-avatar.png' },
];

const responseGetContarctors = {
  contartors,
  popularContartors,
  contartorsCount: 123,
  totalPage: 500,
  // TODO: пагинация
};

export default responseGetContarctors;
