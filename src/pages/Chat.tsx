import { useEffect } from "react";
import { postChatMessage } from "../api/chat";
import Conversation from "../components/Conversation";
import Messages from "../components/Messages";
import { styled } from "styled-components";

const Chat = () => {
  useEffect(() => {
    postChatMessage({ message: "Hello World" });
  }, []);

  return (
    <ChatWrapper>
      <Messages />
      <Conversation />
    </ChatWrapper>
  );
};

export default Chat;

const ChatWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 8px;
  height: 100vh;
`;

