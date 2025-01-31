import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");
    /*    */
    if (userToken && usersStorage) {
      const hasEmail = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasEmail) setUser(hasEmail[0]);
    }
  }, []);

  const login = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasEmail = usersStorage?.filter((user) => user.email === email);

    if (hasEmail?.length) {
      if (hasEmail[0].email === email && hasEmail[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const register = (username, email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUsername = usersStorage?.filter(
      (user) => user.username === username
    );

    const hasEmail = usersStorage?.filter((user) => user.email === email);

    if (hasEmail?.length) {
      return "Já tem uma conta com esse E-mail";
    }

    if (hasUsername?.length) {
      return "Já existe um usuário com este nome";
    }

    let newUser;

    if (usersStorage) {
      const sortedUsers = usersStorage.sort(function (a, b) {
        return a.id - b.id;
      });

      const lastId = sortedUsers[sortedUsers.length - 1]?.id;
      newUser = [
        ...usersStorage,
        { id: lastId + 1, username, email, password },
      ];
    } else {
      newUser = [{ id: 1, username, email, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const deleteAccount = () => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    const newUsersStorage = usersStorage.filter(
      (obj) => obj.email !== user.email
    );
    console.log("currentUser:", user);
    console.log("Users without current:", newUsersStorage);
    localStorage.setItem("users_bd", JSON.stringify(newUsersStorage));
  };
  // deleteAccount();

  return (
    <AuthContext.Provider
      value={{
        user: user,
        signed: !!user,
        login,
        register,
        logout,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
