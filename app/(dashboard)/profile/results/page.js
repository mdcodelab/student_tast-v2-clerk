import connectDB from "@/utils/database";
import User from "@/models/userModel";
import { currentUser } from "@clerk/nextjs/server";

async function ResultsPage() {
  //get the user id which is logged from Clerk server
  const loggedUser = await currentUser();
const { id, firstName, lastName, emailAddresses } = loggedUser;
const emailAddress = emailAddresses[0]?.emailAddress;
console.log(loggedUser);

  await connectDB();
  const user = await User.findOne({id})
  console.log(user)
  return (
    <div>
      Results Page
    </div>
  )
}

export default ResultsPage;
