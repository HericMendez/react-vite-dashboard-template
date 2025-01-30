import {user} from "../configs/user";

export const authService = {
    

    login: (username, password) => {
      if (username === user.email && password === user.password) {
        const fakeToken = user.token;
        localStorage.setItem("token", fakeToken);
        return true;
      }
      return false;
    },
  
    logout: () => {
      localStorage.removeItem("token");
    },
  
    isAuthenticated: () => {
      return !!localStorage.getItem("token");
    },
  };
  