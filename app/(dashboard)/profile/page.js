import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, UserCheck2 } from "lucide-react";
import { auth, currentUser } from "@clerk/nextjs/server";

async function ProfilePage() {
  
  const user = await currentUser();
console.log(user);

  return (
    <div className="flex align-center justify-center w-full h-full">
      <div className="flex flex-col gap-y-4 px-4 text-xl">
        <p className="text-xl">
          Testul cuprinde 30 de intrebari. Fiecare intrebare are un singur
          raspuns corect.{" "}
        </p>

        <p>
          Fiecare raspuns corect este notat cu 0,3 puncte. Se acorda un punct
          din oficiu.
        </p>
        <p>Timpul de lucru este de 2 ore.</p>
        <p className="text-center pt-6">Succes! &#128522;</p>
        <Button className="w-50 mt-6 mx-auto text-xl">
          <Loader2 className="mr-2 animate-spin" /> <Link href="/profile/test">Incepe Testul</Link>
        </Button>
      </div>
    </div>
  );
}

export default ProfilePage;
