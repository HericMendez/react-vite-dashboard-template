// menu.js
import { FaHome, FaChartBar, FaCog, FaList } from 'react-icons/fa';

const menuItems = [
  {
    key: 'home',
    label: 'Home',
    icon: <FaHome />,
    path: '/',
  },
  {
    key: 'analytics',
    label: 'Screens',
    icon: <FaChartBar />,
    subItems: [
      { key: 'login', label: 'Login', path: '/screens/login' },

    ],
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <FaCog />,
    path: '/settings',
  },

  {
    key: 'todo',
    label: 'Todo List',
    icon: <FaList />,
    path: '/todo',
  },
];

export default menuItems;
