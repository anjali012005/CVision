"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);     
  const [loading, setLoading] = useState(true);

  // Path A: restore from localStorage
  useEffect(() => {
    const lsToken = localStorage.getItem("token");
    if (lsToken) {
      try {
        const decoded = jwtDecode(lsToken);
        setUser(decoded); // decoded payload will be the user
      } catch (err) {
        console.error("Invalid stored token", err);
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

  // Login function will decode the token and store user
  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
      localStorage.setItem("token", token);
    } catch (err) {
      console.error("Invalid Token at login", err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
