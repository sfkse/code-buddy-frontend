import React from "react";
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
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
  background-color: ${({ theme }) => theme.colors.lightGray};
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
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const ConversationSenderMessageContentMessage = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.darkPrimaryColor};
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
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const ConversationReceiverMessageContentMessage = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.darkPrimaryColor};
`;

