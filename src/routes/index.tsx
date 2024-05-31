import { Spin } from 'antd';
import React, { FunctionComponent, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const Router: FunctionComponent = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<Spin />}>
          <p>home</p>
        </Suspense>
      ),
    },
  ]);
  return routes;
};

export default Router;
