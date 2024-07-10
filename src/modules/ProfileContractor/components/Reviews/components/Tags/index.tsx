import React, { useMemo } from 'react';

import { Button } from '@components';

import { IoMdClose } from 'react-icons/io';

import styles from './Tags.module.scss';

import { ITags } from '../../type';

const Tags = ({ data, activeTag, setActiveTag }: ITags) => {
  const tags = useMemo(
    () => (
      <div className={styles.tags}>
        {data.map((tag) => {
          return (
            <Button
              key={tag.id}
              className={`${activeTag === tag.name && styles.active} ${styles.tag} `}
              onClick={() => setActiveTag(tag.name)}
            >
              <span>{tag.name}</span>
              <span className={styles.count}>{tag.count}</span>
            </Button>
          );
        })}
        {activeTag && (
          <Button
            className={styles.reset}
            type="text"
            icon={<IoMdClose />}
            onClick={() => setActiveTag('')}
          >
            Сбросить
          </Button>
        )}
      </div>
    ),
    [data, activeTag, setActiveTag],
  );

  return tags;
};

export default Tags;
