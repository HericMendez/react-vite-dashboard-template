import useAuth from "../../utils/hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const { deleteAccount } = useAuth();
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    if (
      confirm(
        "Deseja mesmo excluir sua conta? Essa ação não pode ser desfeita!"
      ) == true
    ) {
      deleteAccount();
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={handleDeleteAccount} className="btn btn-danger mt-5">
        Excluir minha conta
      </button>
    </div>
  );
};

export default Settings;
