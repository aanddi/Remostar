import { useContext } from 'react';

import { CitysContext } from '@common/providers/ModalProviders/CitysProvides';

const useModalCitys = () => {
  const citysContext = useContext(CitysContext);

  if (!citysContext) throw new Error('Нет контекста citysContext');

  return citysContext;
};

export default useModalCitys;
