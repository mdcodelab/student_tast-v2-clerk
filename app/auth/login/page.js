import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Asigură-te că acest import este corect
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
//import { loginUser } from "@/app/actions/userActions";
//import { auth } from "@/auth";
//import FormError from "@/components/FormError";
//import FormSuccess from "@/components/FormSuccess";


async function LoginPage() {
const session = await auth();
console.log("This is my session", session);
  return (
    <Card className="w-[350px] rounded-lg shadow">
      <CardHeader>
        <CardTitle className="text-center">Welcome Back!</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="email" className="text-lg">Email:</Label>
            <Input name="email" id="email" type="email" placeholder="Your email..." className="w-full"/>
          </div>
          <div>
            <Label htmlFor="password" className="text-lg">Password:</Label>
            <Input name="password" id="password" type="password" placeholder="Your password..." className="w-full"/>
          </div>
          <Button type="submit" className="w-full text-lg">Login</Button>
        </form>

        <p className="text-center">OR</p>

        <form>
          <Button type="button" className="w-full text-lg">
            <FaGoogle className="block mr-2"/>
            Google
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p>Don't have an account?</p>
        <Button asChild variant="link" className="text-md">
          <Link href="/auth/register">Register</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default LoginPage;
