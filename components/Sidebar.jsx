"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { FaRegNoteSticky } from "react-icons/fa6";
import { LuGoal } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { useState } from "react";

function Sidebar() {
  const pathname = usePathname();
const[isUserAdmin, setUserAdmin] = useState(true);

  return (
    <aside className="h-full bg-muted">
      <h1 className="text-center pb-10 pt-6 font-semibold text-2xl">
        Financial Management</h1>
      <div
        className="background-div rounded mx-auto my-4"
        style={{ width: "15rem", height: "10rem" }}
      ></div>
      <div className="flex flex-col py-6 gap-y-10 pt-10">
        <Button variant={pathname === "/profile/test" ? "default" : "link"}>
          <Link
            href="/profile/test" className="flex items-center gap-x-2 text-xl"><FaRegNoteSticky /> Test</Link>
        </Button>

        <Button
          variant={pathname === "/profile/results" ? "default" : "link"}>
<<<<<<< HEAD
          <Link href="/profile/results" className="flex items-center gap-x-2 text-xl"><LuGoal /> Rezultate</Link>
        </Button>
        {isUserAdmin && (
          <Button variant={pathname === "/profile/students" ? "default" : "link"}>
            <Link href="/profile/students" className="flex items-center gap-x-2 text-xl"><PiStudent /> Studenti</Link>
=======
          <Link href="/profile/results" className="flex items-center gap-x-2 text-xl"><LuGoal />Scores</Link>
        </Button>
        {isUserAdmin && (
          <Button variant={pathname === "/profile/students" ? "default" : "link"}>
            <Link href="/profile/students" className="flex items-center gap-x-2 text-xl"><PiStudent /> Students</Link>
>>>>>>> ef6e9fdb3ec8d683e8d9faa281c7b7d9ea12e632
          </Button>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
