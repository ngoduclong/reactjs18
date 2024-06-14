import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AuthLayout from '@/layouts/AuthLayout';
import PublicLayout from '@/layouts/PublicLayout';
import NotFoundPage from '@/pages/NotFound';
import { RoutePaths } from './routes-constants';
import { userLoader } from './loaders';

const HomePage = lazy(() => import('@/pages/Home'));
const LoginPage = lazy(() => import('@/pages/Login'));
const UserDetailPage = lazy(() => import('@/pages/UserDetail'));

const router = createBrowserRouter([
  {
    element: <AuthLayout isAuth={true} />,
    children: [
      {
        path: RoutePaths.HOME,
        element: <HomePage />,
      },
      {
        path: RoutePaths.USER(),
        element: <UserDetailPage />,
        loader: userLoader,
      },
    ],
  },
  {
    element: <PublicLayout isAuth={true} />,
    children: [
      {
        path: RoutePaths.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
export { RoutePaths };
