export const ChatHistory = () => {
  const chatHistory = [
    {
      id: "1",
      image: "https://picsum.photos/200/300",
      username: "user",
      createdAt: "2024-02-13 23:33:40",
    },
    {
      id: "2",
      image: "https://picsum.photos/200/300",
      username: "user",
      createdAt: "2024-02-13 23:33:40",
    },
  ];

  return (
    <div className="px-2">
      <h6>Chat History</h6>

      {chatHistory?.map((chat) => {
        return (
          <div key={chat.id} className="flex items-center gap-2">
            <img
              src={chat.image}
              alt={chat.username}
              className="h-8 w-8 rounded-full"
            />
            <div>
              <h6>{chat.username}</h6>
              <p>{chat.createdAt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
