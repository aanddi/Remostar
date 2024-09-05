import React from 'react';

import { Title } from '@components';

import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className="container">
        <Title title="Профиль" level={2} />
      </div>
    </div>
  );
};

export default Profile;
