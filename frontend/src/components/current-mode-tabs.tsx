import CustomEditor from "./custom-editor"
import { CurrentModeContext } from "@/context"
import { useContext } from "react"
import { ChatContext } from "@/context"
import { Button } from "./ui/button"
import ReactMarkdown from 'react-markdown'
export default function CurrentModeTabs() {
    const [currentMode, setCurrentMode] = useContext(CurrentModeContext)
    const [chat, _] = useContext(ChatContext)

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                {
                    ["editor", "chat", "history", "git"].map((mode) => {
                        return (
                            <Button
                                key={mode}
                                className={`px-5 py-1 bg-slate-700 text-white ${currentMode === mode ? "bg-slate-900" : ""}`}
                                onClick={() => setCurrentMode(mode)}
                                value={mode}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</Button>
                        )
                    })
                }
            </div>
            <div>
                {currentMode === "editor" && <CustomEditor />}
                {currentMode === "chat" && <ReactMarkdown>{chat}</ReactMarkdown>}
                {currentMode === "history" && "History here."}
                {currentMode === "git" && "Git here."}
            </div>
        </div>
    )
}
