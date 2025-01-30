import { useState } from 'react';
import { FaBars, FaSun, FaMoon } from "react-icons/fa"; // Ícones necessários
import LogoutBtn from "./LogoutBtn";

const Header = ({ onToggleSidebar, onToggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    onToggleDarkMode && onToggleDarkMode(); // Chama a função caso exista
  };

  return (
    <header className="header">
      <button className="toggle-sidebar-btn" onClick={onToggleSidebar}>
        <FaBars />
      </button>
      <h1>Meu Painel</h1>

      <div className="header-icons">
        <button className="dark-mode-btn" onClick={handleDarkModeToggle}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <LogoutBtn />
      </div>
    </header>
  );
};

export default Header;
