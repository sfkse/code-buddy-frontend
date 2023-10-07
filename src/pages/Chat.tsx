import { useEffect } from "react";
import { styled } from "styled-components";

import Conversation from "../components/chat/Conversation";
import Messages from "../components/chat/Messages";

import { postChatMessage } from "../api/chat";

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
  height: 100vh;
`;

