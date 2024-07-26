import LinksDropdown from "./LinksDropdown";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import ToggleInButton from "./ToggleInButton";

function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <div>
        <LinksDropdown></LinksDropdown>
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeToggle></ThemeToggle>
        <ToggleInButton></ToggleInButton>
      </div>
    </nav>
  );
}

export default Navbar
