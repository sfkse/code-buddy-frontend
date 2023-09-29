import { styled } from "styled-components";
import { IoSendSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/Rx";
import UserInfoPopUp from "./UserInfoPopUp";
import { useState } from "react";

const userObject = {
  idusers: "c51ce767-114b-4875-8539-76b3b08793ed",
  active: 1,
  email: "new@gmail.com",
  firstname: "New",
  lastname: "Devops",
  user_type: 0,
  updated_at: 1695989048,
  created_at: 1695989048,
  location:
    '{"lat":34.5260109,"lon":69.1776838,"city":"Kabul","country":"Afghanistan"}',
  skills: "devOps",
};

const Conversation = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const handleOpenUserPopUp = () => {
    setIsOpenPopUp(!isOpenPopUp);
  };
  return (
    <>
      <ConversationWrapper>
        <ConversationHeader>
          <ConversationContactWrapper onClick={handleOpenUserPopUp}>
            <ConversationContactAvatar />
            <ConversationContactInfoWrapper>
              <ConversationContactName>John Doe</ConversationContactName>
              <ConversationContactLastSeen>
                Active 1h ago
              </ConversationContactLastSeen>
            </ConversationContactInfoWrapper>
            <ConversationContactInfoPopUpWrapper isOpenPopUp={isOpenPopUp}>
              <UserInfoPopUp type="noAction" user={userObject} />
            </ConversationContactInfoPopUpWrapper>
          </ConversationContactWrapper>
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
    </>
  );
};

export default Conversation;

const ConversationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
`;

const ConversationHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const ConversationContactWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ConversationContactAvatar = styled(RxAvatar)`
  font-size: 2rem;
`;

const ConversationContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConversationContactName = styled.div`
  margin-left: 0.3rem;
  font-size: 0.8rem;
  font-weight: 700;
`;

const ConversationContactLastSeen = styled.div`
  margin-left: 0.3rem;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.primaryTransparent};
`;

const ConversationContactInfoPopUpWrapper = styled.div<{
  isOpenPopUp?: boolean;
}>`
  position: absolute;
  top: 110%;
  right: -100%;
  display: none;

  ${({ isOpenPopUp }) =>
    isOpenPopUp && {
      display: "block",
    }}
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
    color: ${({ theme }) => theme.colors.primaryTransparent};
  }
`;

const ConversationMessageInputIcon = styled(IoSendSharp)`
  margin-left: 0.3rem;
  font-size: 2rem;
`;

