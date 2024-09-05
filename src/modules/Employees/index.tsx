import React from 'react';

import { Title } from '@components';

import styles from './Employees.module.scss';

const Employees = () => {
  return (
    <div className={styles.employees}>
      <div className="container">
        <Title title="Сотрудники" level={2} />
      </div>
    </div>
  );
};

export default Employees;
