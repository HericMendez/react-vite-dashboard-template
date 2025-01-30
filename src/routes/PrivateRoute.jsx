import Login from "../pages/auth/Login";
import useAuth from "../utils/hooks/useAuth";

const PrivateRoute = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

export default PrivateRoute;
