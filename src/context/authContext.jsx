import { useReducer, createContext } from "react";
import bcrypt from "bcryptjs";
const initialState = { user: null };
if (localStorage.getItem("token")) {
  initialState.user = JSON.parse(localStorage.getItem("token"));
}
const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    const hashedPassword = bcrypt.hashSync(userData.password, 10);
    userData = {
      id: userData.id,
      email: userData.email,
      password: hashedPassword,
      __typename: userData.__typename,
    };

    localStorage.setItem("token", JSON.stringify(userData));
    dispatch({ type: "LOGIN", payload: userData });
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };
  const user = state.user;
  return <AuthContext.Provider value={{ user, login, logout }} {...props} />;
}
export { AuthContext, AuthProvider };
