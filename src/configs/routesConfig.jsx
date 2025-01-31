// routes.js
import Home from "../pages/app/Home";


import Settings from "../pages/app/Settings";
import Login from "../pages/auth/Login";
import Todo from "../pages/app/Todo";
import Register from "../pages/auth/Register";
import TablePage from "../pages/app/Table";

export const routes = [
  {
    key: "home",
    path: "/",
    element: <Home />,
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
    path: "/components/todo",
    element: <Todo />,
    isPrivate: true,
  },
  {
    key: "table",
    path: "/components/table",
    element: <TablePage />,
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
