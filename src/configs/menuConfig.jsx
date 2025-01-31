// menu.js
import { FaHome, FaCog, FaList, FaReact } from "react-icons/fa";

const menuItems = [
  {
    key: "home",
    label: "Home",
    icon: <FaHome />,
    path: "/",
  },
  {
    key: "components",
    label: "Components",
    icon: <FaReact />,
    subItems: [
      {
        key: "todo",
        label: "Todo List",
        path: "/components/todo",
        icon: <FaList />,
      },
      {
        key: "table",
        label: "Table",
        path: "/components/table",
        icon: <FaList />,
      },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

export default menuItems;
