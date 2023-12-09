import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const FAKE_USER = {
  name: "Petar",
  email: "petar@gmail.com",
  password: "1234",
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      setIsAuthenticated(true);
    return;
  }

  function logout() {
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
