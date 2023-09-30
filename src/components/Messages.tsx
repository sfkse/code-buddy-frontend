import { styled } from "styled-components";
import { RxAvatar } from "react-icons/Rx";
import { TbSearch } from "react-icons/tb";

const Messages = () => {
  return (
    <MessagesWrapper>
      <MessagesHeader>
        <MessagesHeaderTitle>Contacts</MessagesHeaderTitle>
        <MessagesHeaderSearch>
          <MessagesHeaderSearchInput placeholder="Search" />
          <MessagesHeaderSearchIcon />
        </MessagesHeaderSearch>
      </MessagesHeader>
      <MessagesList>
        <MessagesListItem $active={true}>
          <MessagesListItemAvatar />
          <MessagesListItemContent>
            <MessagesListItemContentName>John Doe</MessagesListItemContentName>
            <MessagesListItemContentMessage $unread={true}>
              Hey, how are you?
            </MessagesListItemContentMessage>
          </MessagesListItemContent>
          <MeesageListItemStatus>
            <MessagesListItemUnreadStatus>1</MessagesListItemUnreadStatus>
            <MessagestListItemTime>1h ago</MessagestListItemTime>
          </MeesageListItemStatus>
        </MessagesListItem>
        <MessagesListItem $active={false}>
          <MessagesListItemAvatar />
          <MessagesListItemContent>
            <MessagesListItemContentName>John Doe</MessagesListItemContentName>
            <MessagesListItemContentMessage $unread={false}>
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
  padding: 0.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const MessagesHeaderTitle = styled.h3`
  font-size: 1.2rem;
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

const MessagesListItem = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  ${({ $active, theme }) =>
    $active && {
      backgroundColor: theme.colors.secondary,
    }}
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

const MessagesListItemContentMessage = styled.p<{ $unread?: boolean }>`
  font-size: 0.8rem;

  ${({ $unread, theme }) =>
    $unread && {
      color: theme.colors.yellow,
      fontWeight: 700,
      fontStyle: "italic",
    }}
`;

const MeesageListItemStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
`;

const MessagesListItemUnreadStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 0.6rem;
`;

const MessagestListItemTime = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`;

