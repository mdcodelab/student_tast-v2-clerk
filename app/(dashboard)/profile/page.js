import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import connectDB from "@/utils/database";
import User from "@/models/userModel";

async function ProfilePage() {
  const user = await currentUser();
  const { id, firstName, lastName, emailAddresses } = user;
  const emailAddress = emailAddresses[0]?.emailAddress;

  console.log(id, firstName, lastName, emailAddress);
  console.log("User id is:", id);

  // Register users on MongoDB
  await connectDB();
  const existingUser = await User.findOne({ email: emailAddress });
  if (!existingUser) {
    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: emailAddress,
      clerkId: id,
    });
  }

  return (
    <div className="flex align-center justify-center w-full h-full">
      <div className="flex flex-col gap-y-4 px-4 text-xl">
        <p className="text-xl">
          The test consists of 30 questions. Each question has only one correct answer.
        </p>
        <p>
          Each correct answer is scored 0.3 points. One point is awarded by default.
        </p>
        <p>The working time is 2 hours.</p>
        <p className="text-center pt-6">Good luck! &#128522;</p>
        <Button className="w-50 mt-6 mx-auto text-xl">
          <Loader2 className="mr-2 animate-spin" />
          <Link href="/profile/test">Start the Test</Link>
        </Button>
      </div>
    </div>
  );
}

export default ProfilePage;
