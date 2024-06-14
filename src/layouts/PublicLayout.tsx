import { Navigate, Outlet } from 'react-router-dom';

import { RoutePaths } from '@/routes';

interface IProps {
  isAuth: boolean;
}

const PublicLayout = ({ isAuth }: IProps) => {
  return isAuth ? <Navigate to={RoutePaths.HOME} /> : <Outlet />;
};

export default PublicLayout;
