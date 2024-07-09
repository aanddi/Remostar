import React from 'react';

import { Breadcrumb, Button, Image } from '@components';

import { Verify } from '@common';

import { IoMdAdd } from 'react-icons/io';

import styles from './Header.module.scss';
import mock from './mock';

const itemsBreadcrumb = [
  {
    title: 'Поиск подрядчика',
    href: '/contractors',
  },
  {
    title: mock.nameCompany,
  },
];

const Header = ({ id }: { id?: string }) => {
  console.log(id);
  return (
    <div className={styles.header}>
      <Breadcrumb items={itemsBreadcrumb} />
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.name}>
              {mock.nameCompany}
              {mock.verify && <Verify />}
            </div>

            <div className={styles.info}>
              <div className={styles.type}> {mock.typeCompany}</div>
              <div className={styles.time}>{mock.timePlatform} на платформе</div>
            </div>
            <div className={styles.actions}>
              <Button type="primary">Написать</Button>
              <Button className={styles.button} icon={<IoMdAdd />}>
                Добавить в избранное
              </Button>
            </div>
          </div>
          {mock.logo && (
            <div className={styles.logo}>
              <Image preview={false} src={mock.logo} width={150} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
