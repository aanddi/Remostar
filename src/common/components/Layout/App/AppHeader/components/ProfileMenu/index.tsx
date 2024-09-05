import { Heart, MessageCircle } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Roles, RolesEmployee } from '@common/api/services/auth/types/user.type';
import { useAppDispatch, useAuth, useRoles } from '@common/hooks';

import { logoutUser } from '@store/slices/user.slice';

import { Avatar, Badge } from 'antd';

import styles from './ProfileMenu.module.scss';

interface IProfileMenu {
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const ProfileMenu = ({ openModal, handleOpenModal, handleCloseModal }: IProfileMenu) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const user = useAuth();
  const { userRole, employeeRole } = useRoles();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    handleCloseModal();
  };

  useEffect(() => {
    handleCloseModal();
  }, [handleCloseModal, location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleCloseModal();
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleCloseModal]);

  return (
    <div className={styles.menu} ref={ref}>
      <div className={styles.actions}>
        <Link to="/favorites">
          <Heart size={25} className={styles.actionsIcon} />
        </Link>
        <Badge count={0}>
          <Link to="/chats">
            <MessageCircle size={25} className={styles.actionsIcon} />
          </Link>
        </Badge>
        <div className={styles.avatar}>
          <Avatar
            onClick={() => (openModal ? handleCloseModal() : handleOpenModal())}
            size={40}
            src={user?.pathImage ? user?.pathImage : null}
            className={styles.icon}
          >
            {user && user.name[0] + user.surname[0]}
          </Avatar>
        </div>
      </div>
      <div className={`${openModal && styles.modalActive} ${styles.modalProfile}`}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            {user?.name} {user?.surname}
            <div className={styles.userRole}>
              {userRole?.roleDesc} {employeeRole && `(${employeeRole?.roleDesc})`}
            </div>
          </div>
          <nav className={styles.items}>
            <Link to="/profile" className={styles.item}>
              Мой профиль
            </Link>
            {employeeRole?.roleName === RolesEmployee.Admin && (
              <>
                <Link to="/company" className={styles.item}>
                  Моя компания
                </Link>
                <Link to="/employees" className={styles.item}>
                  Сотрудники
                </Link>
              </>
            )}
            {userRole?.roleName === Roles.Employee && (
              <Link to={`/contractor/${user?.employee?.contractorId}`} className={styles.item}>
                Страница подрядчика
              </Link>
            )}
            {userRole?.roleName === Roles.Owner && (
              <Link to="/announcements" className={styles.item}>
                Мои объявления
              </Link>
            )}
            <Link to="/objects" className={styles.item}>
              Объекты
            </Link>
            <Link to="/" onClick={handleLogoutUser} className={`${styles.logout} ${styles.item}`}>
              Выйти
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
