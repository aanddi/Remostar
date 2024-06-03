import { AppLayout } from '@common';
import { Spin } from 'antd';
import React, { FunctionComponent, Suspense, lazy } from 'react';

import { useRoutes } from 'react-router-dom';

const SearchOwnersPage = lazy(() => import('./SearchOwners'));
const SearchContractorsPage = lazy(() => import('./SearchContractors'));
const AboutPlatformPage = lazy(() => import('./AboutPlatform'));

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
      path: 'owners',
      element: (
        <Suspense fallback={<Spin />}>
          <AppLayout>
            <SearchOwnersPage />
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
