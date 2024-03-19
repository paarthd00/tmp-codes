import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect, useState } from "react";
export default function ChatHistory() {
  const { user } = useKindeAuth();
  const [chats, setChats] = useState<any[]>([]);

  const getChats = async () => {
    const response = await fetch("/api/chatHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user?.id }),
    }).then((response) => response.json());
    setChats(response.chatHistory);
  }

  useEffect(() => {
    getChats();
  }, []);



  return (
    <div className="h-100">

      {chats?.map((chat) => {
        return (
          <div key={chat.id} className="flex items-center gap-2">
            <p>{chat.prompt}</p>
          </div>
        );
      })}
    </div>
  );
}
