// import { useState } from "react";

export default function Chats() {
  // const [activeChat, setActiveChat] = useState(0);

  const chats = ["chat 1", "chat 2", "chat 3"];

  return (
    <div className="h-100">
      <h6>Chats</h6>

      {chats?.map((chat) => {
        return (
          <div key={chat} className="flex items-center gap-2">
            <p>{chat}</p>
          </div>
        );
      })}
    </div>
  );
}
