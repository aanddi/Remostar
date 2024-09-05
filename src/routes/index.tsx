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
  const routesSite = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <AboutPlatformPage />
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/contractors',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <SearchContractorsPage />
          </AppLayout>
        </Suspense>
      ),
    },

    {
      path: '/contractor/:id',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <ProfileContractorsPage />
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/tenders',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <SearchOwnersPage />
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/tender/:id',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <AboutTenderPage />
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/register',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <RegistrationPage />
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/forbidden',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <ForbiddenPage />
          </AppLayout>
        </Suspense>
      ),
    },
  ]);

  const profile = useRoutes([
    {
      path: '/profile',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <AuthProvider>
              <ProfilePage />
            </AuthProvider>
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/employees',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <AuthProvider
              protectionUser={[Roles.Owner]}
              protectionEmployee={[RolesEmployee.Manager, RolesEmployee.Brigadier]}
            >
              <EmployeesPage />
            </AuthProvider>
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/objects',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <AuthProvider>
              <ObjectsPage />
            </AuthProvider>
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/announcements',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <AuthProvider protectionUser={[Roles.Employee]}>
              <AnnouncementsPage />
            </AuthProvider>
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/chats',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <AuthProvider>
              <ChatsPage />
            </AuthProvider>
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/favorites',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <AuthProvider>
              <FavoritesPage />
            </AuthProvider>
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '/company',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <AuthProvider
              protectionUser={[Roles.Owner]}
              protectionEmployee={[RolesEmployee.Manager, RolesEmployee.Brigadier]}
            >
              <MyCompanyPage />
            </AuthProvider>
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: '*',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <NotFoundPage />
          </AppLayout>
        </Suspense>
      ),
    },
  ]);

  const notFound = useRoutes([
    {
      path: '*',
      element: (
        <Suspense fallback={<FullScreenLoader />}>
          <AppLayout>
            <NotFoundPage />
          </AppLayout>
        </Suspense>
      ),
    },
  ]);

  return (
    <ScrollToTop>
      {routesSite}
      {profile}
      {notFound}
    </ScrollToTop>
  );
};

export default Router;
