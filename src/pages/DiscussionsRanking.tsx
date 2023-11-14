import styled from "styled-components";
import Avatar from "../components/Avatar";
import { BsSearchHeartFill } from "react-icons/bs";

const DiscussionsRanking = () => {
  return (
    <DiscussionsRankingWrapper>
      <DiscussionsRankingHeaderTitle>
        Top Contributors
      </DiscussionsRankingHeaderTitle>
      <DiscussionsRankingHeaderBadges>Badges</DiscussionsRankingHeaderBadges>
      <DiscussionsRankingHeaderTopicsCreated>
        Topics Created
      </DiscussionsRankingHeaderTopicsCreated>
      <DiscussionsRankingHeaderReplies>Replies</DiscussionsRankingHeaderReplies>
      <DiscussionsRankingListItemTitleWrapper>
        <Avatar name="Sefa" />
        @Sefa
      </DiscussionsRankingListItemTitleWrapper>
      <DiscussionsRankingListItemBadges>
        <BsSearchHeartFill />
      </DiscussionsRankingListItemBadges>
      <DiscussionsRankingListItemTopicsCreated>
        Topics Created
      </DiscussionsRankingListItemTopicsCreated>
      <DiscussionsRankingListItemReplies>
        Replies
      </DiscussionsRankingListItemReplies>
      <DiscussionsRankingListItemTitleWrapper>
        <Avatar name="Sefa" />
        @Sefa asdasda sssss adasd
      </DiscussionsRankingListItemTitleWrapper>
      <DiscussionsRankingListItemBadges>
        asdasda sssss adasd
      </DiscussionsRankingListItemBadges>
      <DiscussionsRankingListItemTopicsCreated>
        Topics Created
      </DiscussionsRankingListItemTopicsCreated>
      <DiscussionsRankingListItemReplies>
        Replies
      </DiscussionsRankingListItemReplies>
    </DiscussionsRankingWrapper>
  );
};

export default DiscussionsRanking;

const DiscussionsRankingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  /* gap: 1rem; */
  grid-row-gap: 1rem;
  margin-bottom: 2rem;
`;

const DiscussionsRankingHeaderTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionsRankingHeaderBadges = styled.div`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionsRankingHeaderTopicsCreated = styled.div`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionsRankingHeaderReplies = styled.div`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionsRankingListItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.font.body.base};
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionsRankingListItemBadges = styled.div`
  font-size: ${({ theme }) => theme.font.body.base};
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionsRankingListItemTopicsCreated = styled.div`
  font-size: ${({ theme }) => theme.font.body.base};
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionsRankingListItemReplies = styled.div`
  font-size: ${({ theme }) => theme.font.body.base};
  color: ${({ theme }) => theme.colors.primary};
`;

// const DiscussionsContent = () => {

