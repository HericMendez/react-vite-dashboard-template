import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "../configs/routes";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <RouterRoutes>
      {/* Rotas protegidas */}
      <Route element={<ProtectedRoute />}>
        {protectedRoutes.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={route.element}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Rotas públicas */}
      <Route element={<PublicRoute />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      {/* Redirecionamento para a página inicial caso a rota não seja encontrada */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
