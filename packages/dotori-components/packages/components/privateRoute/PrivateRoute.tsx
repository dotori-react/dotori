import { Navigate } from 'react-router-dom';

// 인증된 유저만 접근 가능하도록 함.
const PrivateRoute = ({ token, element, redirectTo }: PrivateRouteProps) =>
  token ? element : <Navigate to={redirectTo} />;

interface PrivateRouteProps {
  token?: string | undefined;
  element: React.ReactNode;
  redirectTo: string;
}

export default PrivateRoute;
