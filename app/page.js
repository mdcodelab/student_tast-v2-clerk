import { Button } from "../components/ui/button";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import { Card, CardContent } from "../components/ui/card";

function HomePage() {

  return (
    <div className="h-screen w-screen background-div">
      <div className="card">
        <Card
          style={{ backgroundColor: "rgba(192, 192, 102, 0.4" }}
          className="lg: p-10 sm: px-8"
        >
          <CardContent>
            <h1 className="text-center text-4xl font-bold pb-12 tracking-wide text-white" style={{letterSpacing: "0.1rem"}}>
              Test
            </h1>
            <h1 className="text-center text-3xl font-bold pb-12 tracking-wide text-white" style={{letterSpacing: "0.1rem"}}>
              Financial Management
            </h1>
            <Link
              href="/profile"
              className="w-100 ml-20 mt-10 relative p-8 rounded text-lg"
            >
              <Button className="text-2xl px-10 py-6">
                <SignUpButton></SignUpButton>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <footer>
        <h1 className="text-center text-white">&copy; Mihaela Diaconu. All rights reserved.
        </h1>
      </footer>
    </div>
  );
}

export default HomePage;
