import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AuthGuard = lazy(() => import('@/guards/AuthGuard'));

const Layouts = lazy(() => import('@/layouts'));

const LoginPage = lazy(() => import('@/pages/Login'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LoginPage />,
    index: true,
  },
  {
    element: <AuthGuard />,
    children: [
      {
        element: <Layouts />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
