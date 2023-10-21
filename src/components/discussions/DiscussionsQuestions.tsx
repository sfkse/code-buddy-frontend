import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GrFormView } from "react-icons/gr";
import { BiMessage, BiSolidHot, BiTimer } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineLockClosed } from "react-icons/hi";
import { FaRegCircleQuestion } from "react-icons/fa6";

import Card from "../Card";
import Avatar from "../Avatar";
import Button from "../Button";
import { DEVICES } from "../../styles/theme";

type DiscussionsQuestionsProps = {
  type: "yourquestions" | "youranswers" | "questions";
};
const DiscussionsQuestions = ({ type }: DiscussionsQuestionsProps) => {
  const navigate = useNavigate();

  const handleOpenQuestion = () => {
    navigate("/discussions/questions/1");
  };

  return (
    <>
      {type === "yourquestions" && <h1>Your Questions</h1>}
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
        <DiscussionsContentListItem onClick={handleOpenQuestion}>
          <Card>
            <DiscussionsContentCreatorWrapper>
              <Avatar name="Sefa" />
              <DiscussionsContentCreatorDetails>
                <DiscussionsContentCreatorName>
                  Sefa
                </DiscussionsContentCreatorName>
                <DiscussionsContentCreatorDate>
                  Today
                </DiscussionsContentCreatorDate>
              </DiscussionsContentCreatorDetails>
            </DiscussionsContentCreatorWrapper>
            <DiscussionsContentListItemTitle>
              How to patch KDE on FreeBSD?
            </DiscussionsContentListItemTitle>
            <DiscussionsContentListItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptatibus, quos, accusantium, quibusdam voluptas voluptatem
              voluptatum quod doloribus consequuntur doloremque quae. Quod
              voluptatem, quia tempore voluptatibus voluptas molestias
              consequatur.
            </DiscussionsContentListItemDescription>
            <DiscussionsContentListItemProperties>
              <DiscussionsContentListItemTagsWrapper>
                <DiscussionsContentListItemTag>
                  golang
                </DiscussionsContentListItemTag>
                <DiscussionsContentListItemTag>
                  linux
                </DiscussionsContentListItemTag>
              </DiscussionsContentListItemTagsWrapper>
              <DiscussionsContentListStatistics>
                <DiscussionsContentListSeen>
                  <DiscussionsContentListSeenIcon />
                  123
                </DiscussionsContentListSeen>
                <DiscussionsContentListAnswers>
                  <DiscussionsContentListAnswersIcon />
                  123
                </DiscussionsContentListAnswers>
                <DiscussionsContentListVotes>
                  <DiscussionsContentListVotesIcon />
                  123
                </DiscussionsContentListVotes>
              </DiscussionsContentListStatistics>
            </DiscussionsContentListItemProperties>
          </Card>
        </DiscussionsContentListItem>
      </DiscussionsContentList>
    </>
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
  margin-bottom: 2rem;
  cursor: pointer;
  width: 100%;
`;

const DiscussionsContentCreatorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const DiscussionsContentCreatorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscussionsContentCreatorName = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 600;
  margin-left: 0.5rem;
`;

const DiscussionsContentCreatorDate = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 600;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
`;

const DiscussionsContentListItemTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.font.body.xl};
  font-weight: 500;
`;

const DiscussionsContentListItemDescription = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.font.body.sm};
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const DiscussionsContentListItemProperties = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
`;

const DiscussionsContentListItemTagsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const DiscussionsContentListItemTag = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.caution};
  padding: 0.2rem 0.5rem;
  display: inline-block;
`;

const DiscussionsContentListStatistics = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const DiscussionsContentListSeen = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const DiscussionsContentListSeenIcon = styled(GrFormView)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: ${({ theme }) => theme.font.body.base};
`;

const DiscussionsContentListAnswers = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const DiscussionsContentListAnswersIcon = styled(BiMessage)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const DiscussionsContentListVotes = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const DiscussionsContentListVotesIcon = styled(AiOutlineArrowUp)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: ${({ theme }) => theme.font.body.xs};
`;

