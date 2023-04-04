import { theme } from "@/styles/theme";
import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { toast } from "react-toastify";

import { AuthContext } from "./authContext";

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const [logged, setLogged] = useState(false);

  const handleLogin = ({ token }: { token: string }) => {
    setCookie(null, "jwtToken", token);

    setLogged(true);
  };

  const handleLogout = () => {
    destroyCookie(null, "jwtToken");

    toast.success("Logout realizado com sucesso!", {
      icon: <FiCheckCircle size={24} color={theme.colors.green_400} />,
    });

    setLogged(false);

    router.push("/");
  };

  useEffect(() => {
    const cookies = parseCookies();

    if (cookies?.jwtToken) {
      setLogged(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, logged }}>
      {children}
    </AuthContext.Provider>
  );
};
