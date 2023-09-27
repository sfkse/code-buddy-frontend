import { styled } from "styled-components";
import { RxAvatar } from "react-icons/Rx";
import { TbSearch } from "react-icons/tb";

const Messages = () => {
  return (
    <MessagesWrapper>
      <MessagesHeader>
        <MessagesHeaderTitle>Messages</MessagesHeaderTitle>
        <MessagesHeaderSearch>
          <MessagesHeaderSearchInput placeholder="Search" />
          <MessagesHeaderSearchIcon />
        </MessagesHeaderSearch>
      </MessagesHeader>
      <MessagesList>
        <MessagesListItem>
          <MessagesListItemAvatar />
          <MessagesListItemContent>
            <MessagesListItemContentName>John Doe</MessagesListItemContentName>
            <MessagesListItemContentMessage>
              Hey, how are you?
            </MessagesListItemContentMessage>
          </MessagesListItemContent>
        </MessagesListItem>
        <MessagesListItem>
          <MessagesListItemAvatar />
          <MessagesListItemContent>
            <MessagesListItemContentName>John Doe</MessagesListItemContentName>
            <MessagesListItemContentMessage>
              Hey, how are you?
            </MessagesListItemContentMessage>
          </MessagesListItemContent>
        </MessagesListItem>
      </MessagesList>
    </MessagesWrapper>
  );
};

export default Messages;

const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MessagesHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const MessagesHeaderTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

const MessagesHeaderSearch = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const MessagesHeaderSearchInput = styled.input`
  display: none;
  border: none;
  outline: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const MessagesHeaderSearchIcon = styled(TbSearch)`
  margin-left: 0.5rem;
  cursor: pointer;
`;

const MessagesList = styled.div``;

const MessagesListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const MessagesListItemAvatar = styled(RxAvatar)`
  width: 2rem;
  height: 2rem;
`;

const MessagesListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  line-height: 1.2rem;
`;

const MessagesListItemContentName = styled.h4`
  font-weight: 700;
`;

const MessagesListItemContentMessage = styled.p`
  font-size: 0.8rem;
`;

