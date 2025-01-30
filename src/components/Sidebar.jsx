import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menuItems from "../configs/menuConfig";


const Sidebar = ({ isSidebarOpen, onToggleSidebar }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const [sidebarVisible, setSidebarVisible] = useState(false); // Renomeado


  // Alternar submenu
  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };


  useEffect(() => {
    setSidebarVisible(isSidebarOpen)
  }, [isSidebarOpen]);

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''} ${sidebarVisible ? 'expanded' : 'collapsed'}`}>
 
      <div className="sidebar-toggle" onClick={onToggleSidebar}>
        {sidebarVisible ? '<<' : '>>'}
      </div>


      <nav>
        <ul  className="menu">
          {menuItems.map((item) => (
            <>
            <li className='menu-sub-items' key={item.key} onClick={item.subItems ? () => toggleSubMenu(item.key) : onToggleSidebar}>
            <Link to={item.path || '#'} className="menu-item">
                {item.icon}
                {sidebarVisible && <span>{item.label}</span>}
              </Link>
              {item.subItems && activeMenu === item.key && (
                <ul className="submenu">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.key} onClick={onToggleSidebar}>
                      <Link to={subItem.path}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            </>
          ))}

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
