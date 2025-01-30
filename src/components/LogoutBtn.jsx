import { FaUser } from "react-icons/fa";
import useAuth from "../utils/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <button className="user-btn" onClick={handleLogout}>
        <FaUser />
      </button>
    </div>
  );
};

export default LogoutBtn;
