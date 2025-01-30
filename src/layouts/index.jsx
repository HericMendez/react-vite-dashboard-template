import { lazy, useContext } from "react";
import AppRoutes from "../routes";
import { AuthContext } from '../contexts/AuthContext';

const AppLayout = lazy(() => import("./AppLayout"));
const AuthLayout = lazy(() => import("./AuthLayout"));

const Layouts = () => {

  const { isAuthenticated } = useContext(AuthContext);
  const Layout = isAuthenticated ? AppLayout : AuthLayout;

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default Layouts;
