import React, { PropsWithChildren, Suspense, lazy, useLayoutEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { Roles, RolesEmployee } from '@common/api/services/auth/types/user.type';
import { AppLayout } from '@common/components';
import FullScreenLoader from '@common/components/FullScreenLoader';
import AuthProvider from '@common/providers/AuthProvider';

const SearchOwnersPage = lazy(() => import('./SearchOwners'));
const SearchContractorsPage = lazy(() => import('./SearchContractors'));
const AboutPlatformPage = lazy(() => import('./AboutPlatform'));
const ProfileContractorsPage = lazy(() => import('./ProfileContractor'));
const AboutTenderPage = lazy(() => import('./AboutTender'));

const RegistrationPage = lazy(() => import('./Registration'));

const ProfilePage = lazy(() => import('./Profile'));
const ObjectsPage = lazy(() => import('./Objects'));
const AnnouncementsPage = lazy(() => import('./Announcements'));
const EmployeesPage = lazy(() => import('./Employees'));
const ChatsPage = lazy(() => import('./Chats'));
const FavoritesPage = lazy(() => import('./Favorites'));
const MyCompanyPage = lazy(() => import('./MyCompany'));

const NotFoundPage = lazy(() => import('./NotFound'));
const ForbiddenPage = lazy(() => import('./Forbidden'));

export const ScrollToTop = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

const Router = () => {
  const routes = useRoutes([
    {
      path: '*',
      element: <NotFoundPage />,
    },
    {
      path: '/',
      element: <AboutPlatformPage />,
    },
    {
      path: '/contractors',
      element: <SearchContractorsPage />,
    },

    {
      path: '/contractor/:id',
      element: <ProfileContractorsPage />,
    },
    {
      path: '/tenders',
      element: <SearchOwnersPage />,
    },
    {
      path: '/tender/:id',
      element: <AboutTenderPage />,
    },
    {
      path: '/register',
      element: <RegistrationPage />,
    },
    {
      path: '/forbidden',
      element: <ForbiddenPage />,
    },
    {
      path: '/profile',
      element: (
        <AuthProvider>
          <ProfilePage />
        </AuthProvider>
      ),
    },
    {
      path: '/employees',
      element: (
        <AuthProvider
          protectionUser={[Roles.Owner]}
          protectionEmployee={[RolesEmployee.Manager, RolesEmployee.Brigadier]}
        >
          <EmployeesPage />
        </AuthProvider>
      ),
    },
    {
      path: '/objects',
      element: (
        <AuthProvider>
          <ObjectsPage />
        </AuthProvider>
      ),
    },
    {
      path: '/announcements',
      element: (
        <AuthProvider protectionUser={[Roles.Employee]}>
          <AnnouncementsPage />
        </AuthProvider>
      ),
    },
    {
      path: '/chats',
      element: (
        <AuthProvider>
          <ChatsPage />
        </AuthProvider>
      ),
    },
    {
      path: '/favorites',
      element: (
        <AuthProvider>
          <FavoritesPage />
        </AuthProvider>
      ),
    },
    {
      path: '/company',
      element: (
        <AuthProvider
          protectionUser={[Roles.Owner]}
          protectionEmployee={[RolesEmployee.Manager, RolesEmployee.Brigadier]}
        >
          <MyCompanyPage />
        </AuthProvider>
      ),
    },
  ]);

  return (
    <Suspense fallback={<FullScreenLoader />}>
      <ScrollToTop>
        <AppLayout>{routes}</AppLayout>
      </ScrollToTop>
    </Suspense>
  );
};

export default Router;
