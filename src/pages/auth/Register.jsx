import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import PasswordInput from "../../components/PasswordInput";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("Preencha todos os campos!");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não conferem!");
      return;
    }

    const res = await register(username, email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Bem-vindo</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Confirme seu e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            required
          />
          <PasswordInput
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
            }}
          />
          <button type="submit">Registrar</button>
        </form>
        {error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
};

export default Register;
