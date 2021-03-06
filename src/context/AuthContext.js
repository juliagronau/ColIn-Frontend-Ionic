import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const verifySession = async () => {
      const options = {
        credentials: "include",
        headers: {
          token,
        },
      };
      const res = await fetch(
        `${process.env.REACT_APP_API}/user/verify-session`,
        options
      );
      const { success, error, user } = await res.json();
      if (success) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        localStorage.removeItem("token");
        setIsAuthenticated("false");
        setUser({});
      }
    };
    if (token) {
      verifySession();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
