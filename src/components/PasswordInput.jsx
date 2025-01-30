import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ícones para alternar visibilidade

const PasswordInput = ({ name, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block", width: "100%" }}
    >
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        style={{ width: "100%", paddingRight: "40px" }} // Espaço para o ícone
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#222",
        }}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
