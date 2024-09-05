import { useAppSelector } from '@common/hooks';

export const useAuth = () =>
  useAppSelector((state) => {
    return state?.user.user;
  });

export default useAuth;
