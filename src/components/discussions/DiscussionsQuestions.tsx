import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiSolidHot, BiTimer } from "react-icons/bi";
import {
  BsArrowUpRight,
  BsChevronDoubleDown,
  BsReplyFill,
} from "react-icons/bs";
import { HiOutlineLockClosed } from "react-icons/hi";
import { FaRegCircleQuestion } from "react-icons/fa6";

import Avatar from "../Avatar";
import Button from "../Button";
import { DEVICES } from "../../styles/theme";
import { CgArrowDownO, CgArrowUpO } from "react-icons/cg";
import useFetchAllDiscussions from "../../hooks/discussions/useFetchAllDiscussions";
import Loader from "../Loader";
import { Discussion } from "../../types/discussions";
import { convertPassedDaysFromTimestamp } from "../../utils/dateUtils";
import ToastMessage from "../ToastMessage";
import { getPlainContent } from "../../utils/editorUtils";

const DiscussionsQuestions = () => {
  const navigate = useNavigate();
  const { discussions, isPending, error } = useFetchAllDiscussions();

  const handleOpenQuestion = (id: string) => {
    navigate(`/discussions/questions/${id}`);
  };

  const fetchDiscussionContentText = (content) => {
    const htmlContent = getPlainContent(content);

    const text =
      htmlContent.length > 200
        ? getPlainContent(content).slice(0, 200) + "..."
        : htmlContent;
    return text;
  };
  return (
    <Loader isLoading={isPending}>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <DiscussionsContentTabsWrapper>
        <DiscussionsContentTabs>
          <DiscussionsContentTab>
            <NewTabIcon />
            New
          </DiscussionsContentTab>
          <DiscussionsContentTab>
            <TopTabIcon />
            Top
          </DiscussionsContentTab>
          <DiscussionsContentTab>
            <HotTabIcon /> Hot
          </DiscussionsContentTab>
          <DiscussionsContentTab>
            <ClosedTabIcon /> Closed
          </DiscussionsContentTab>
        </DiscussionsContentTabs>
        <Button
          title="ASK A QUESTION"
          variant="primary"
          icon={<FaRegCircleQuestion />}
          onClick={() => navigate("/discussions/newquestion")}
        />
      </DiscussionsContentTabsWrapper>
      <DiscussionsContentList>
        {discussions.map((discussion: Discussion) => (
          <DiscussionsContentListItem key={discussion.iddiscussions}>
            <DiscussionContentsWrapper>
              <DiscussionContentItem $type="commentOwner">
                <DiscussionContentHeaderWrapper>
                  <DiscussionContentHeaderTitleWrapper>
                    <DiscussionContentHeaderTitle>
                      <Avatar name="Karin Benzema" />
                      <DiscussionContentHeaderTitleUsername>
                        @karinbenzema
                      </DiscussionContentHeaderTitleUsername>
                    </DiscussionContentHeaderTitle>
                  </DiscussionContentHeaderTitleWrapper>
                  <DiscussionContentHeaderInfoWrapper>
                    <DiscussionContentHeaderInfoDate>
                      {convertPassedDaysFromTimestamp(discussion.created) < 2
                        ? "Today"
                        : convertPassedDaysFromTimestamp(discussion.created) +
                          " days ago"}
                    </DiscussionContentHeaderInfoDate>
                  </DiscussionContentHeaderInfoWrapper>
                </DiscussionContentHeaderWrapper>
                <DiscussionContentBodyWrapper
                  onClick={() => handleOpenQuestion(discussion.iddiscussions)}
                >
                  <DiscussionContentBodyTitle>
                    {discussion.title}
                  </DiscussionContentBodyTitle>
                  <DiscussionContentBodyText>
                    {fetchDiscussionContentText(discussion)}
                  </DiscussionContentBodyText>
                </DiscussionContentBodyWrapper>
                <DiscussionContentVotesAndOptionsWrapper>
                  <DiscussionContentVotesWrapper>
                    <DiscussionContentVotes>
                      <DiscussionContentVotesUp>
                        <DiscussionContentVotesUpIcon />
                      </DiscussionContentVotesUp>
                      <DiscussionContentVotesCount>
                        {discussion.upvote}
                      </DiscussionContentVotesCount>
                      <DiscussionContentVotesDown>
                        <DiscussionContentVotesDownIcon />
                      </DiscussionContentVotesDown>
                      <DiscussionContentVotesCount>
                        {discussion.downvote}
                      </DiscussionContentVotesCount>
                    </DiscussionContentVotes>
                  </DiscussionContentVotesWrapper>
                  <DiscussionContentOptionsWrapper>
                    <DiscussionContentOptions>
                      <DiscussionContentOptionsIcon
                        onClick={() =>
                          handleOpenQuestion(discussion.iddiscussions)
                        }
                      >
                        <DiscussionCommenShowComments />
                        Show all replies ({discussion.comments?.length})
                      </DiscussionContentOptionsIcon>
                      <DiscussionContentOptionsIcon
                        onClick={() =>
                          handleOpenQuestion(discussion.iddiscussions)
                        }
                      >
                        <DiscussionContentReplyIcon />
                        Reply
                      </DiscussionContentOptionsIcon>
                    </DiscussionContentOptions>
                  </DiscussionContentOptionsWrapper>
                </DiscussionContentVotesAndOptionsWrapper>
              </DiscussionContentItem>
            </DiscussionContentsWrapper>
          </DiscussionsContentListItem>
        ))}
      </DiscussionsContentList>
    </Loader>
  );
};

export default DiscussionsQuestions;

const DiscussionsContentTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  @media only screen and (${DEVICES.md}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const DiscussionsContentTabs = styled.div`
  display: flex;
  /* flex: 4; */
  margin: 0;
  padding: 0;
`;

const NewTabIcon = styled(BiTimer)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const TopTabIcon = styled(BsArrowUpRight)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const HotTabIcon = styled(BiSolidHot)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const ClosedTabIcon = styled(HiOutlineLockClosed)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const DiscussionsContentTab = styled.div`
  padding: 1rem;
  font-size: ${({ theme }) => theme.font.body.xs};
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.primary};

    ${NewTabIcon}, ${TopTabIcon}, ${HotTabIcon}, ${ClosedTabIcon} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media only screen and (${DEVICES.md}) {
    padding: 0.5rem;
    font-size: ${({ theme }) => theme.font.body.xs};
  }
`;

const DiscussionsContentList = styled.div`
  margin: 0;
  padding: 0;

  @media only screen and (${DEVICES.lg}) {
    padding-left: 1rem;
  }
`;

const DiscussionsContentListItem = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const DiscussionContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DiscussionContentItem = styled.div<{ $type?: string }>`
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

const DiscussionContentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DiscussionContentHeaderTitleWrapper = styled.div``;

const DiscussionContentHeaderTitle = styled.span`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const DiscussionContentHeaderTitleUsername = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 500;
  margin-left: 0.5rem;
`;

const DiscussionContentHeaderInfoWrapper = styled.div``;

const DiscussionContentHeaderInfoDate = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 400;
`;

const DiscussionContentBodyWrapper = styled.div`
  cursor: pointer;
`;

const DiscussionContentBodyTitle = styled.p`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const DiscussionContentBodyText = styled.p`
  font-size: ${({ theme }) => theme.font.body.sm};
  font-weight: 400;
  max-height: fit-content;
  overflow: hidden;
`;

const DiscussionContentVotesAndOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  margin-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const DiscussionContentVotesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DiscussionContentVotes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DiscussionContentVotesUp = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DiscussionContentVotesUpIcon = styled(CgArrowUpO)`
  font-size: ${({ theme }) => theme.font.body.base};
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionContentVotesDown = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DiscussionContentVotesDownIcon = styled(CgArrowDownO)`
  font-size: ${({ theme }) => theme.font.body.base};
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionContentVotesCount = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 400;
`;

const DiscussionContentOptionsWrapper = styled.div``;

const DiscussionContentOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.yellow};
`;

const DiscussionCommenShowComments = styled(BsChevronDoubleDown)`
  font-size: ${({ theme }) => theme.font.body.base};
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.yellow};
`;

const DiscussionContentReplyIcon = styled(BsReplyFill)`
  font-size: ${({ theme }) => theme.font.body.base};
  margin: 0 2px;
  color: ${({ theme }) => theme.colors.yellow};
`;

const DiscussionContentOptionsIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.body.xs};
  cursor: pointer;
`;

