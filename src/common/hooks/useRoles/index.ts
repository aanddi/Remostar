import { useAppSelector } from '@common/hooks';

export const useRoles = () =>
  useAppSelector((state) => {
    const userRole = state?.user.user?.roles.userRole;
    const employeeRole = state?.user.user?.roles.employeeRole;
    return { userRole, employeeRole };
  });

export default useRoles;
