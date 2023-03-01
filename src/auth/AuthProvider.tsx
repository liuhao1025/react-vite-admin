import { useState, createContext } from "react";
import AuthService from "./AuthService";

interface AuthType {
  user: Object | null,
  login: () => void,
  logout: () => void
}
export const AuthContext = createContext<AuthType | null>(null);
export function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useState(AuthService.user);
  const auth = {
    user,
    login() {
      const user = AuthService.login();
      setUser(user);
    },
    logout() {
      const user = AuthService.logout();
      setUser(user);
    },
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
