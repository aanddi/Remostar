import React, { useCallback, useState } from 'react';

import { Button, Modal } from '@components';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { set } from '@store/slices/citys.slice';

import styles from './ModalCitys.module.scss';
import mockCitys from './mock';

const ModalCitys = ({ ...rest }) => {
  const { city } = useAppSelector((state) => state.citys);
  const dispatch = useAppDispatch();

  const [selectedСity, setSelectedСity] = useState({ city });

  const handleSubmitModal = useCallback(() => {
    dispatch(set(selectedСity));
    rest.onCancel();
  }, [dispatch, rest, selectedСity]);

  return (
    <Modal
      centered
      title="Выбор города или региона"
      className={styles.modal}
      okText="Сохранить"
      handleSubmit={handleSubmitModal}
      handleClose={rest.onCancel}
      {...rest}
    >
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {mockCitys.map((cityItem) => {
            return (
              <Button
                key={cityItem.id}
                type={selectedСity.city === cityItem.name ? 'primary' : 'text'}
                className={`${styles.cityItem}`}
                onClick={() => setSelectedСity({ city: cityItem.name })}
              >
                {cityItem.name}
              </Button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ModalCitys;
