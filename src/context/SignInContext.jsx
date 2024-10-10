import { createContext } from "react";
import SignIn1 from "@/components/signin/SignIn1";
import SignIn2 from "@/components/signin/SignIn2";

const SignInContext = createContext();

export const SignInProvider = ({ children }) => {
  const SignInList = [
    { 0: <SignIn1 />, style: { bgColor: "#fff", color: "#243642" } },
    { 1: <SignIn2 />, style: { bgColor: "#243642", color: "#ccc" } },
  ];

  return (
    <SignInContext.Provider value={SignInList}>
      {children}
    </SignInContext.Provider>
  );
};

export default SignInContext;
