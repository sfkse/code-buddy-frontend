import { styled } from "styled-components";

import Conversation from "../components/chat/Conversation";
import Messages from "../components/chat/Messages";

import { DEVICES } from "../styles/theme";

const Chat = () => {
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
  grid-template-columns: 1fr 2.5fr;
  padding-bottom: 2rem;

  @media only screen and (${DEVICES.sm}) {
    grid-template-columns: 1fr;
  }
`;

