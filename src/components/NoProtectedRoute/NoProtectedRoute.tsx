import { Navigate, Outlet } from 'react-router-dom';

interface NoProtectedProps {
  isAllowed: boolean;
  children: React.ReactNode;
}

const NoProtectedRoute: React.FC<NoProtectedProps> = ({
  children = <></>,
  isAllowed = false,
}) => {
  if (isAllowed) {
    return <Navigate to="/dashboard" />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default NoProtectedRoute;
