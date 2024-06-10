import React from 'react';
import { Avatar, Tooltip, Typography } from 'antd';
import { GoShieldCheck } from 'react-icons/go';
import styles from './PopularContractors.module.scss';

interface PopularContractorsProps {
  contractors: {
    src: string;
    name: string;
    verify: boolean;
  }[];
}

const PopularContractors = ({ contractors }: PopularContractorsProps) => (
  <aside className={styles.popular}>
    <Typography.Title level={5} className={styles.title}>
      Популярные подрядчики
    </Typography.Title>
    <div className={styles.list}>
      {contractors.map((contractor) => {
        return (
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <Avatar size={110} src={contractor.src} />
              <div className={styles.name}>
                <span>{contractor.name}</span>
                {contractor.verify && (
                  <Tooltip title="Проверенный подрядчик">
                    <GoShieldCheck strokeWidth={1} size={16} />
                  </Tooltip>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </aside>
);

export default PopularContractors;
