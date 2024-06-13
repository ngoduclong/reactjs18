import { Navigate, Outlet } from 'react-router-dom';

import { RoutePaths } from '@/routes';

interface IProps {
  isAuth: boolean;
}

const AuthLayout = ({ isAuth }: IProps) => {
  if (!isAuth) return <Navigate to={RoutePaths.LOGIN} />;
  return (
    <div className="AuthLayout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
