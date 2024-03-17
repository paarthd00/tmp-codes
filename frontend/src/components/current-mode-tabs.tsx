import CustomEditor from "./custom-editor"
import { CurrentModeContext } from "@/context"
import { useContext, useEffect } from "react"
import { ChatContext } from "@/context"
import { Button } from "./ui/button"

export default function CurrentModeTabs() {
    const [currentMode, setCurrentMode] = useContext(CurrentModeContext)
    const [chat, setChat] = useContext(ChatContext)

    useEffect(() => {
        console.log(currentMode)
    }, [currentMode])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                {
                    ["editor", "chat", "history", "git"].map((mode) => {
                        return (
                            <Button
                                key={mode}
                                className={`bg-slate-700 text-white ${currentMode === mode ? "bg-slate-900" : ""}`}
                                onClick={() => setCurrentMode(mode)}
                                value={mode}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</Button>
                        )
                    })
                }
            </div>
            <div>
                {currentMode === "editor" && <CustomEditor />}
                {currentMode === "chat" && chat}
                {currentMode === "history" && "History here."}
                {currentMode === "git" && "Git here."}

            </div>
        </div>
    )
}
