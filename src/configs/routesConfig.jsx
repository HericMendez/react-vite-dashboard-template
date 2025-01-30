// routes.js
import Home from "../pages/app/Home";
import Analytics from "../pages/app/Analytics";
import Insights from "../pages/app/Insights";
import Settings from "../pages/app/Settings";
import Login from "../pages/auth/Login";
import Todo from "../pages/app/Todo";
import Register from "../pages/auth/Register";

export const routes = [
  {
    key: "home",
    path: "/",
    element: <Home />,
    isPrivate: true,
  },
  {
    key: "analytics",
    path: "/analytics",
    element: <Analytics />,
    isPrivate: true,
  },
  {
    key: "insights",
    path: "/analytics/insights",
    element: <Insights />,
    isPrivate: true,
  },
  {
    key: "settings",
    path: "/settings",
    element: <Settings />,
    isPrivate: true,
  },
  {
    key: "todo",
    path: "/todo",
    element: <Todo />,
    isPrivate: true,
  },
  {
    key: "login",
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    key: "register",
    path: "/register",
    element: <Register />,
    isPrivate: false,
  },
];
