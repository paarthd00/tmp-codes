import { ModeToggle } from "./theme-toggle";
import { LanguageSelect } from "./language-select";
export default function Header() {
  return (
    <div className="flex mt-6 container">
      <ModeToggle />
      <LanguageSelect />
    </div>
  );
}
