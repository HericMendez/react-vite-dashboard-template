import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { routes } from "../configs/routesConfig"; // Importando as rotas

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`dashboard app ${
        isSidebarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

      <main className="content">
        {/* 🔥 Envolvendo as rotas dentro de <Routes> */}
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
