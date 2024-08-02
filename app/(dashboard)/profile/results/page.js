import connectDB from "@/utils/database";
import User from "@/models/userModel";
import { auth } from "@clerk/nextjs/server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { correctAnswers } from "@/utils/questions";
import { FaRegNoteSticky } from "react-icons/fa6";

async function ResultsPage() {
  // Get the user id which is logged from Clerk server
  const { userId } = await auth();
  if (!userId) {
    throw new Error("You are not authorized.");
  }

  await connectDB();
  const user = await User.findOne({ clerkId: userId });
  console.log(user);

  return (
    <div className="w-full h-full">
      <h1 className="text-xl font-semibold mb-8 flex items-center justify-center gap-2">
        <FaRegNoteSticky style={{ fontSize: "1.5rem" }} />
        Test result: {user?.result.toFixed(2)}
      </h1>

      <div className="shadow-xl rounded">
        <Table className="m-auto">
          <TableHeader className="text-lg font-semibold">
            <TableRow>
              <TableHead className="text-center">Nr.crt.</TableHead>
              <TableHead className="text-center">Your answer</TableHead>
              <TableHead className="text-center">Correct answer</TableHead>
              <TableHead className="text-center">Score</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {user.answers.map((answer, index) => (
              <TableRow key={index} className="text-center">
                <TableCell>{index + 1}.</TableCell>
                <TableCell>{answer ? answer : "null"}</TableCell>
                <TableCell>{correctAnswers[index]}</TableCell>
                <TableCell className="text-center">
                  {correctAnswers[index].toString() === answer ? "0.3" : "0"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ResultsPage;
