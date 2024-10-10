import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpProvider } from "./context/SignUpContext";
import Dashboard from "./components/Dashboard";
import SignUp from "./routes/SignUp";
import { SignInForms } from "./routes/SignInForms";
import { SignInProvider } from "./context/SignInContext";

const App = () => {
  return (
    <SignUpProvider>
      <SignInProvider>
        <Router>
          <h1 className="text-3xl text-center mt-5 text-orange-200 font-bold">
            Welcome to Form Hell...
          </h1>
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/signin" element={<SignInForms />}></Route>
          </Routes>
        </Router>
      </SignInProvider>
    </SignUpProvider>
  );
};

export default App;
