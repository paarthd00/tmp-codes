import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Header from "@/components/header";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useState, useEffect } from "react";
import { LanguageContext, EditorContext, CurrentModeContext, ChatContext } from "@/context";

export const Route = createRootRoute({
  component: () => {
    const { isAuthenticated, isLoading, login, logout, user } = useKindeAuth();
    const [language, setLanguage] = useState("javascript");
    const [code, setCode] = useState("// some comment");
    const [currentMode, setCurrentMode] = useState("editor");
    const [chat, setChat] = useState("// some Chat");
 
    useEffect(() => {
      (async () => {
        if (user && isAuthenticated) {
          const response = await fetch(`/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ "user": user }),
          }).then((response) => response.json());
          if (response.error) {
            alert("Error logging in");
          }
        }
      })()
    }, [isAuthenticated])

    if (isLoading) return <p>Loading</p>

    return (<>
      {isAuthenticated ?
        <LanguageContext.Provider value={[language, setLanguage]}>
          <EditorContext.Provider value={[code, setCode]}>
            <CurrentModeContext.Provider value={[currentMode, setCurrentMode]}>
              <ChatContext.Provider value={[chat, setChat]}>
                <div className="pt-3 px-0 flex gap-2 justify-between w-[100%] container items-center">
                  <Header />
                  <div className="flex gap-2 items-center">
                    <Link to="/" className="[&.active]:font-bold">
                      Home
                    </Link>{" "}
                    <button onClick={() => logout()} type="button">
                      Sign Out
                    </button>
                  </div>
                </div>
                <hr />
                <Outlet />
              </ChatContext.Provider>
            </CurrentModeContext.Provider>
          </EditorContext.Provider>
        </LanguageContext.Provider>
        :
        <div className="pt-8 px-8">
          <p>Please sign in or register!</p>
          <button onClick={() => login()} type="button">
            Sign In Buddy
          </button>
        </div>
      }
    </>)
  }
});
