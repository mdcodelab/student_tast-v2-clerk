import connectDB from "@/utils/database";
import User from "@/models/userModel";

async function ResultsPage() {
  await connectDB();
  const user = await User.fundOne({})
  return (
    <div>
      Results Page
    </div>
  )
}

export default ResultsPage;
