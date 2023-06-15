import { useLocation, Navigate, Outlet } from "react-router-dom";

const NoRequireAuth = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  return token ? (
    <Navigate to="/" state={{ from: location.pathname }} replace />
  ) : (
    <>
      <Outlet />
    </>
  );
};
export default NoRequireAuth;
