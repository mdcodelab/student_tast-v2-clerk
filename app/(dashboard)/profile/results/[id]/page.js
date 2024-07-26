import connectDB from "@/config/database";
import { useParams } from "next/navigation";
import { getUser } from "@/app/actions/register";

async function Results () {
    const {id}=useParams();
    const user=await getUser(id);
    console.log(user);

    return (
        <div>Your results is: </div>
    )

}