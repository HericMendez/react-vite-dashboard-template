import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../configs/routesConfig";
import ProtectedRoute from "./PrivateRoute";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  const isPrivate = ({ route }) => {
    if (route.isPrivate) {
      return <PrivateRoute Item={route.element} />;
    }
    return route.element;
  };

  return (
    <Routes>
      {/* Rotas protegidas */}
      <Route element={<ProtectedRoute />}>
        {routes.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={isPrivate(route.element)}
          />
        ))}
      </Route>

      {/* Redirecionamento para a página inicial caso a rota não seja encontrada */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
