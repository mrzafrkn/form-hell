import { createContext } from "react";
import axios from "axios";

const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const addUser = (newUser) => {
    axios
      .post("http://localhost:3000/users", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <SignUpContext.Provider value={{ addUser }}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
