
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import connectDB from "@/utils/database";
import User from "@/models/userModel";

async function StudentsPage() {
  await connectDB();
  const allUsers = await User.find({});
  

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader className="text-xl font-semibold">
          <TableRow>
            <TableCell className="text-center">Nr.crt.</TableCell>
            <TableCell className="text-center">clerkId</TableCell>
            <TableCell className="text-center">Prenume</TableCell>
            <TableCell className="text-center">Nume</TableCell>
            <TableCell className="text-center">Email</TableCell>
            <TableCell className="text-center">Rezultat</TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allUsers.map((user, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="text-center">{index+1}.</TableCell>
                <TableCell className="text-center">{user.clerkId}</TableCell>
                <TableCell className="text-center">
                  {user.firstName ? user.firstName : "-"}
                </TableCell>
                <TableCell className="text-center">
                  {user.lastName ? user.lastName : "-"}
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




  