import { useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "./authContext"

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [logged, setLogged] = useState(true);

  const handleLogin = ({ token }: { token: string }) => {
    localStorage.setItem('jwtToken', token);

    setLogged(true);
  }

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');

    toast.success('Logout realizado com sucesso!');

    setLogged(false);
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, logged }}>
      {children}
    </AuthContext.Provider>
  )
};
