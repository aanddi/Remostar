import React, { FunctionComponent, Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { AppLayout } from '@common';

import { Spin } from 'antd';

const SearchOwnersPage = lazy(() => import('./SearchOwners'));
const SearchContractorsPage = lazy(() => import('./SearchContractors'));
const AboutPlatformPage = lazy(() => import('./AboutPlatform'));
const ProfileContractorsPage = lazy(() => import('./ProfileContractor'));

const Router: FunctionComponent = () => {
  const routesSite = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<Spin />}>
          <AppLayout>
            <AboutPlatformPage />
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: 'contractors',
      element: (
        <Suspense fallback={<Spin />}>
          <AppLayout>
            <SearchContractorsPage />
          </AppLayout>
        </Suspense>
      ),
    },

    {
      path: 'contractor/:id',
      element: (
        <Suspense fallback={<Spin />}>
          <AppLayout>
            <ProfileContractorsPage />
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: 'tenders',
      element: (
        <Suspense fallback={<Spin />}>
          <AppLayout>
            <SearchOwnersPage />
          </AppLayout>
        </Suspense>
      ),
    },
    {
      path: 'tender/:id',
      element: (
        <Suspense fallback={<Spin />}>
          <AppLayout>
            <div>О Объекте</div>
          </AppLayout>
        </Suspense>
      ),
    },
  ]);

  const profileOwner = useRoutes([{}]);
  const profileContractors = useRoutes([{}]);

  return (
    <>
      {routesSite}
      {profileOwner}
      {profileContractors}
    </>
  );
};

export default Router;
