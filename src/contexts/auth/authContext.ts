import { createContext } from "react";

interface AuthContextValues {
  handleLogin: (credentials: { token: string }) => void;
  handleLogout: () => void;
  logged: boolean;
}

export const AuthContext = createContext({} as AuthContextValues);
