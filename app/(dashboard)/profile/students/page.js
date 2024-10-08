import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import connectDB from "@/utils/database";
import User from "@/models/userModel";

async function StudentsPage() {
  await connectDB();
  const allUsers = await User.find({});

  return (
    <div className="flex items-center justify-center shadow-lg rounded">
      <Table className="m-auto shadow-lg">
        <TableHeader className="text-xl font-semibold">
          <TableRow>
            <TableHead className="text-center">Nr.crt.</TableHead>
            <TableHead className="text-center">First name</TableHead>
            <TableHead className="text-center">Last name</TableHead>
            <TableHead className="text-center">Group</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Results</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allUsers.map((user, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="text-center">{index + 1}.</TableCell>
                <TableCell className="text-center">
                  {user.firstName ? user.firstName : "-"}
                </TableCell>
                <TableCell className="text-center">
                  {user.lastName ? user.lastName : "-"}
                </TableCell>
                <TableCell className="text-center">
                  {user?.group}
                </TableCell>
                <TableCell className="text-center">{user?.email}</TableCell>
                <TableCell className="text-center">
                  {user?.result.toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default StudentsPage;
