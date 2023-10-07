import styled from "styled-components";
import { BsChevronDoubleDown, BsReplyFill } from "react-icons/bs";
import { CgArrowDownO, CgArrowUpO } from "react-icons/cg";

import Avatar from "../Avatar";

const DiscussionComments = () => {
  return (
    <DiscussionCommentsWrapper>
      <DiscussionCommentItem $type="commentOwner">
        <DiscussionCommentHeaderWrapper>
          <DiscussionCommentHeaderTitleWrapper>
            <DiscussionCommentHeaderTitle>
              <Avatar name="Karin Benzema" />
              <DiscussionCommentHeaderTitleUsername>
                @karinbenzema
              </DiscussionCommentHeaderTitleUsername>
            </DiscussionCommentHeaderTitle>
          </DiscussionCommentHeaderTitleWrapper>
          <DiscussionCommentHeaderInfoWrapper>
            <DiscussionCommentHeaderInfoDate>
              2 days ago
            </DiscussionCommentHeaderInfoDate>
          </DiscussionCommentHeaderInfoWrapper>
        </DiscussionCommentHeaderWrapper>
        <DiscussionCommentBodyWrapper>
          <DiscussionCommentBodyText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            doloribus, voluptatum, quae, quod voluptatem voluptas voluptate
            tempora quos quibusdam natus doloremque. Voluptate, voluptatum
            doloremque.
          </DiscussionCommentBodyText>
        </DiscussionCommentBodyWrapper>
        <DiscussionCommentVotesAndOptionsWrapper>
          <DiscussionCommentVotesWrapper>
            <DiscussionCommentVotes>
              <DiscussionCommentVotesUp>
                <DiscussionCommentVotesUpIcon />
              </DiscussionCommentVotesUp>
              <DiscussionCommentVotesCount>10</DiscussionCommentVotesCount>
              <DiscussionCommentVotesDown>
                <DiscussionCommentVotesDownIcon />
              </DiscussionCommentVotesDown>
              <DiscussionCommentVotesCount>10</DiscussionCommentVotesCount>
            </DiscussionCommentVotes>
          </DiscussionCommentVotesWrapper>
          <DiscussionCommentOptionsWrapper>
            <DiscussionCommentOptions>
              <DiscussionCommentOptionsIcon>
                <DiscussionCommenShowComments />
                Show all replies (2)
              </DiscussionCommentOptionsIcon>
              <DiscussionCommentOptionsIcon>
                <DiscussionCommentReplyIcon />
                Reply
              </DiscussionCommentOptionsIcon>
            </DiscussionCommentOptions>
          </DiscussionCommentOptionsWrapper>
        </DiscussionCommentVotesAndOptionsWrapper>
      </DiscussionCommentItem>
    </DiscussionCommentsWrapper>
  );
};

export default DiscussionComments;

const DiscussionCommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const DiscussionCommentItem = styled.div<{ $type?: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-left: 4px solid
    ${({ theme, $type }) =>
      $type === "commentOwner" ? theme.colors.caution : theme.colors.yellow};
  border-radius: 4px;
`;

const DiscussionCommentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DiscussionCommentHeaderTitleWrapper = styled.div``;

const DiscussionCommentHeaderTitle = styled.span`
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const DiscussionCommentHeaderTitleUsername = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  margin-left: 0.5rem;
`;

const DiscussionCommentHeaderInfoWrapper = styled.div``;

const DiscussionCommentHeaderInfoDate = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`;

const DiscussionCommentBodyWrapper = styled.div``;

const DiscussionCommentBodyText = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
`;

const DiscussionCommentVotesAndOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  margin-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const DiscussionCommentVotesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DiscussionCommentVotes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DiscussionCommentVotesUp = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DiscussionCommentVotesUpIcon = styled(CgArrowUpO)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionCommentVotesDown = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DiscussionCommentVotesDownIcon = styled(CgArrowDownO)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionCommentVotesCount = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`;

const DiscussionCommentOptionsWrapper = styled.div``;

const DiscussionCommentOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.yellow};
`;

const DiscussionCommenShowComments = styled(BsChevronDoubleDown)`
  font-size: 1rem;
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.yellow};
`;

const DiscussionCommentReplyIcon = styled(BsReplyFill)`
  font-size: 1rem;
  margin: 0 2px;
  color: ${({ theme }) => theme.colors.yellow};
`;

const DiscussionCommentOptionsIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
`;

