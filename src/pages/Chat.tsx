import { useEffect } from "react";
import { postChatMessage } from "../api/chat";

const Chat = () => {
  useEffect(() => {
    postChatMessage({ message: "Hello World" });
  }, []);

  return <div>Chat</div>;
};

export default Chat;

