import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAllowed: boolean;
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children, isAllowed }: Props) => {
  if (!isAllowed) {
    return <Navigate to="/register" />;
  }

  return children ? <>{children}</> : <Outlet />;
};
