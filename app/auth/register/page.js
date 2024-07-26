import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Asigură-te că acest import este corect
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import { registerUser } from "@/app/actions/userActions";
//import FormError from "@/components/FormError";
//import FormSuccess from "@/components/FormSuccess";

async function RegisterPage() {
  return (
    <Card className="w-[350px] rounded-lg shadow">
      <CardHeader>
        <CardTitle className="text-center">Welcome!</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form className="space-y-6 w-full" action={registerUser}>
          <div className="space-x-2 flex w-full">
            <div className="flex-1">
              <Label htmlFor="firstName" className="text-lg">First Name:</Label>
            <Input name="firstName" id="firstName" type="text" placeholder="First name..." required/>
            </div>
            <div className="flex-1">
              <Label htmlFor="lastName" className="text-lg">Last Name:</Label>
            <Input name="lastName" id="lastName" type="text" placeholder="Last name..." required/>
            </div>
            
          </div>
          <div className="space-y-4">
            <Label htmlFor="email" className="text-lg">Email:</Label>
            <Input name="email" id="email" type="email" placeholder="Your email..." className="w-full" required/>
          </div>
          <div>
            <Label htmlFor="password" className="text-lg">Password:</Label>
            <Input name="password" id="password" type="password" placeholder="Your password..." className="w-full" required/>
          </div>
          <Button type="submit" className="w-full text-lg">Create an account</Button>
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
        <p>Already have an account?</p>
        <Button asChild variant="link" className="text-md">
          <Link href="/auth/login">Login</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RegisterPage;
