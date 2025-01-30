import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { authService } from '../auth/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login com:', formData);
    const { username, password } = formData;
  
    const loginSuccess = await authService.login(username, password);  // Se login for assíncrono
  
    if (loginSuccess) {
      console.log('Login bem-sucedido, redirecionando...');
      navigate("/"); // Redirecionamento após sucesso
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };
  

  const handleSocialLogin = () => {
    console.log('Login com Google');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Bem-vindo</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Usuário"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <div className="social-login">
          <button className="google-btn" onClick={handleSocialLogin}>
            <FaGoogle /> Entrar com Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
