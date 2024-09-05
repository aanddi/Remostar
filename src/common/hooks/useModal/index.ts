import { useCallback, useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return { isOpenModal, handleOpenModal, handleCloseModal };
};

export default useModal;
