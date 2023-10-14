import { useState } from "react";
import { styled } from "styled-components";
import { IoDocumentAttachOutline, IoSendSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

import UserInfoPopUp from "../UserInfoPopUp";

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
            <ConversationContactInfoPopUpWrapper $isopenpopup={isOpenPopUp}>
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
          <ConversationMessageFileInputIcon />
          <ConversationMessageIconsDivider />
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
  height: 90vh;
  overflow-y: scroll;
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
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
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const ConversationContactInfoPopUpWrapper = styled.div<{
  $isopenpopup?: boolean;
}>`
  position: absolute;
  top: 110%;
  right: -100%;
  display: none;

  ${({ $isopenpopup }) =>
    $isopenpopup && {
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
  background-color: ${({ theme }) => theme.colors.primaryLight};
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
  padding: 0.7rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const ConversationMessageInput = styled.input`
  flex: 1;
  font-size: 0.8rem;
  border: none;
  outline: none;
  border-radius: 4px;
  padding-right: 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ConversationMessageFileInputIcon = styled(IoDocumentAttachOutline)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  cursor: pointer;
`;

const ConversationMessageIconsDivider = styled.div`
  width: 1px;
  height: 1rem;
  margin: 0 0.5rem;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;
const ConversationMessageInputIcon = styled(IoSendSharp)`
  margin-left: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
`;

