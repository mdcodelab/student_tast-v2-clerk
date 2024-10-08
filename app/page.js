"use client";
import { Button } from "../components/ui/button";
import Link from "next/link";
//import { SignUpButton } from "@clerk/nextjs";
import { Card, CardContent } from "../components/ui/card";
import { useState } from "react";

function HomePage() {
    const [buttonText, setButtonText] = useState("Get Started");
    const [isHovering, setIsHovering] = useState(false);


  const handleMouseEnter = () => {
    setIsHovering(true);
    setTimeout(() => setButtonText("Ready?"), 400);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setButtonText("Get Started");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setButtonText("Go...");

    setTimeout(() => {
      window.location.href = "/profile"; 
    }, 2000);
  };


  return (
    <div className="h-screen w-screen background-div">
      <div className="card">
        <Card
          style={{ backgroundColor: "rgba(192, 192, 102, 0.4" }}
          className="lg: p-10 sm: px-8"
        >
          <CardContent>
            <h1
              className="text-center text-4xl font-bold pb-12 tracking-wide text-white"
              style={{ letterSpacing: "0.1rem" }}
            >
              Test
            </h1>
            <h1
              className="text-center text-3xl font-bold pb-12 tracking-wide text-white"
              style={{ letterSpacing: "0.1rem" }}
            >
              Financial Management
            </h1>
            <Link
              href="/profile"
              className="w-100 flex items-center justify-center mt-10 p-8 rounded text-lg"
            >
              <Button
                className="text-2xl px-10 py-6 transition-all duration-400 ease-in-out"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              >
                {buttonText}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <footer>
        <h1 className="text-center text-white">
          &copy; Mihaela Diaconu. All rights reserved.
        </h1>
      </footer>
    </div>
  );
}

export default HomePage;
