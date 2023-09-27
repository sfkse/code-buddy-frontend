import { styled } from "styled-components";
import { TbSearch } from "react-icons/tb";

const Conversation = () => {
  return (
    <ConversationWrapper>
      <ConversationHeader>
        <ConversationHeaderTitle>Conversation</ConversationHeaderTitle>
        <ConversationHeaderSearch>
          <ConversationHeaderSearchInput placeholder="Search" />
          <ConversationHeaderSearchIcon />
        </ConversationHeaderSearch>
      </ConversationHeader>
      <ConversationContent>
        <ConversationSenderMessage>
          <ConversationSenderMessageContent>
            <ConversationSenderMessageContentMessage>
              Hey, how are you?
            </ConversationSenderMessageContentMessage>
          </ConversationSenderMessageContent>
        </ConversationSenderMessage>
        <ConversationReceiverMessage>
          <ConversationReceiverMessageContent>
            <ConversationReceiverMessageContentMessage>
              Hey, I'm fine, thanks!
            </ConversationReceiverMessageContentMessage>
          </ConversationReceiverMessageContent>
        </ConversationReceiverMessage>
      </ConversationContent>
      <ConversationMessageInputWrapper>
        <ConversationMessageInput placeholder="Type a message" />
        <ConversationMessageInputIcon />
      </ConversationMessageInputWrapper>
    </ConversationWrapper>
  );
};

export default Conversation;

const ConversationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ConversationHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const ConversationHeaderTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ConversationHeaderSearch = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ConversationHeaderSearchInput = styled.input`
  display: none;
  border: none;
  outline: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const ConversationHeaderSearchIcon = styled(TbSearch)`
  margin-left: 0.5rem;
`;

const ConversationContent = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: scroll;
`;

const ConversationSenderMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

const ConversationSenderMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 50%;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.primaryTransparent};
`;

const ConversationSenderMessageContentMessage = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
`;

const ConversationReceiverMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ConversationReceiverMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const ConversationReceiverMessageContentMessage = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ConversationMessageInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const ConversationMessageInput = styled.input`
  flex: 1;
  font-size: 0.8rem;
  border: none;
  outline: none;
  padding: 0.7rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ConversationMessageInputIcon = styled(TbSearch)`
  margin-left: 0.5rem;
`;

