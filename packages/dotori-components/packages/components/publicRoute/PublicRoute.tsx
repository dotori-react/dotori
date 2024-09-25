import { Navigate } from 'react-router-dom';

// 인증되지 않은 사람만 접근 가능 함.
export const PublicRoute = ({ token, element, redirectTo }: PublicRouteProps) =>
  token ? <Navigate to={redirectTo} /> : element;

interface PublicRouteProps {
  token?: string | undefined;
  element: React.ReactNode;
  redirectTo: string;
}

export default PublicRoute;
