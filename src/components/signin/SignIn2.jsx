import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
function SignIn1() {
  return (
    <div>
      {" "}
      <h3 className="text-xl text-center font-bold mb-5">Sign In</h3>
      <form>
        <Input placeholder="Username" name="username" />
        <Input type="password" placeholder="Password" name="password" />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}

export default SignIn1;
