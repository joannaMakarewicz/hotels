import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  const auth = authContext.isAuthenticated;

  useDebugValue(auth ? "Zalogowany" : "Wylogowany");

  const setAuth = (isAuthenticated, tokenData = null) => {
    if (isAuthenticated) {
      authContext.login();
      if (tokenData) {
        window.localStorage.setItem("token-data", JSON.stringify(tokenData));
      }
    } else {
      authContext.logout();
        window.localStorage.removeItem("token-data");
    }
  };
  return [auth, setAuth];
};

export default useAuth;
