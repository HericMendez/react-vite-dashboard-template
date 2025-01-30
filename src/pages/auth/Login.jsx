import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import PasswordInput from "../../components/PasswordInput";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const response = await login(email, password); // Chamada de API

    if (response) {
      setError(response);
      return;
    }

    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Bem-vindo</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <PasswordInput
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="btn-login" type="submit">
            Entrar
          </button>
        </form>
        {error && <span className="error-message">{error}</span>}
        <button
          className="btn-register mt-2"
          onClick={() => navigate("/register")}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Login;
