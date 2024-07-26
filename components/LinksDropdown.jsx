
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, 
  DropdownMenuItem} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { FaRegNoteSticky } from "react-icons/fa6";
import { LuGoal } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";


function LinksDropdown() {
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="icon">
        <AlignLeft></AlignLeft>
        <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-52 lg:hidden" align="start" sideOffset={25}>
            <DropdownMenuItem><Link href="/profile/test" className="flex align-center gap-x-2 text-xl"><FaRegNoteSticky></FaRegNoteSticky> Test</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="/profile/results" className="flex align-center gap-x-2 text-xl"><LuGoal></LuGoal> Rezultate</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/profile/students" className="flex align-center gap-x-2 text-xl"><PiStudent></PiStudent> Studenti</Link></DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default LinksDropdown;
