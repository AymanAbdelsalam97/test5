import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Header } from "../header";

const RequireAuth = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  return token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};
export default RequireAuth;
