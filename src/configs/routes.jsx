// routes.js
import Home from "../pages/Home";
import Analytics from "../pages/Analytics";
import Insights from "../pages/Insights";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import Todo from "../pages/Todo";

export const protectedRoutes = [
  {
    key: "home",
    path: "/",
    element: <Home />,
  },
  { key: "analytics", path: "/analytics", element: <Analytics /> },
  { key: "insights", path: "/analytics/insights", element: <Insights /> },
  { key: "settings", path: "/settings", element: <Settings /> },
  { key: "todo", path: "/todo", element: <Todo /> },
];

export const publicRoutes = [
  { key: "login",
    path: "/login",
    element: <Login /> 
  }
];
