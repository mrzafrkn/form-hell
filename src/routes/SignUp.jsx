import { useContext, useState } from "react";
import SignUpContext from "@/context/SignUpContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SignUp() {
  const [newUserData, setnewUserData] = useState({
    id: Date.now(),
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
  });
  const { addUser } = useContext(SignUpContext);
  const handleChange = (e) => {
    setnewUserData({
      ...newUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUserData);
  };
  return (
    <div className="signup-container">
      <h3 className="text-lg text-center font-bold mb-5">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="First Name"
          name="firstName"
          value={newUserData.firstName}
          onChange={handleChange}
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          value={newUserData.lastName}
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="E-Mail"
          name="email"
          value={newUserData.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          placeholder="Mobile Number"
          name="mobile"
          value={newUserData.mobile}
          onChange={handleChange}
        />
        <Input
          placeholder="Username"
          name="username"
          value={newUserData.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={newUserData.password}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
