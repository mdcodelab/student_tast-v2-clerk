
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"

async function StudentsPage() {
  

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader className="text-xl font-semibold">
          <TableRow>
            <TableCell>clerkId</TableCell>
            <TableCell>Prenume</TableCell>
            <TableCell>Nume</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Rezultat</TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* {users.map((user, index) => {
            return (
              <TableRow key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.result}</TableCell>
              </TableRow>
            );
          })} */}
        </TableBody>
      </Table>
    </div>
  );
}

export default StudentsPage;




  