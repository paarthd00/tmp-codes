import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Switch } from "./ui/switch"

export function ModeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setMounted(true)
        setTheme("dark")
    }, [])
    if (!mounted) return null
    return (
        <>
            <div className="flex items-center gap-2 px-2 py-1 ">
                <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                <Switch className="switch"
                    checked={theme === "dark"}
                    onCheckedChange={() => {
                        if (theme === "dark") {
                            setTheme("light")
                        } else if (theme === "light") {
                            setTheme("dark")
                        }
                    }}
                />
                <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            </div>

        </>
    )
}
