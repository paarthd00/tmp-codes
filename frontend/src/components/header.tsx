import { ModeToggle } from "./theme-toggle";
import { LanguageSelect } from "./language-select";
export default function Header() {
    return <div className="absolute flex gap-2 pt-2">
        <ModeToggle />
        <LanguageSelect />
    </div>;
}