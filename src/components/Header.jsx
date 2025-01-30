import { useState } from 'react';
import { FaBars, FaUser, FaSun, FaMoon } from 'react-icons/fa'; // Ícones necessários
import { authService } from "../auth/authService";
import { useNavigate } from "react-router-dom";


const Header = ({ onToggleSidebar, onToggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate();


  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };


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
        <button className="user-btn" onClick={handleLogout}>
          <FaUser />
        </button>
      </div>
    </header>
  );
};

export default Header;
