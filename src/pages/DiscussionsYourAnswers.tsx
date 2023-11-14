import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsChevronDoubleDown, BsReplyFill } from "react-icons/bs";

import { CgArrowDownO, CgArrowUpO } from "react-icons/cg";
import Avatar from "../components/Avatar";
import { DEVICES } from "../styles/theme";

const DiscussionsYourAnswers = () => {
  const navigate = useNavigate();

  const handleOpenQuestion = () => {
    navigate("/discussions/questions/1");
  };

  return (
    <>
      <DiscussionsContentList>
        <DiscussionsContentListItem>
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
                    2 days ago
                  </DiscussionContentHeaderInfoDate>
                </DiscussionContentHeaderInfoWrapper>
              </DiscussionContentHeaderWrapper>
              <DiscussionContentBodyWrapper onClick={handleOpenQuestion}>
                <DiscussionContentBodyText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam doloribus, voluptatum, quae, quod voluptatem voluptas
                  voluptate tempora quos quibusdam natus doloremque. Voluptate,
                  voluptatum doloremque.
                </DiscussionContentBodyText>
              </DiscussionContentBodyWrapper>
              <DiscussionContentVotesAndOptionsWrapper>
                <DiscussionContentVotesWrapper>
                  <DiscussionContentVotes>
                    <DiscussionContentVotesUp>
                      <DiscussionContentVotesUpIcon />
                    </DiscussionContentVotesUp>
                    <DiscussionContentVotesCount>
                      10
                    </DiscussionContentVotesCount>
                    <DiscussionContentVotesDown>
                      <DiscussionContentVotesDownIcon />
                    </DiscussionContentVotesDown>
                    <DiscussionContentVotesCount>
                      10
                    </DiscussionContentVotesCount>
                  </DiscussionContentVotes>
                </DiscussionContentVotesWrapper>
                <DiscussionContentOptionsWrapper>
                  <DiscussionContentOptions>
                    <DiscussionContentOptionsIcon onClick={handleOpenQuestion}>
                      <DiscussionCommenShowComments />
                      Show all replies (2)
                    </DiscussionContentOptionsIcon>
                    <DiscussionContentOptionsIcon onClick={handleOpenQuestion}>
                      <DiscussionContentReplyIcon />
                      Reply
                    </DiscussionContentOptionsIcon>
                  </DiscussionContentOptions>
                </DiscussionContentOptionsWrapper>
              </DiscussionContentVotesAndOptionsWrapper>
            </DiscussionContentItem>
          </DiscussionContentsWrapper>
        </DiscussionsContentListItem>
      </DiscussionsContentList>
    </>
  );
};

export default DiscussionsYourAnswers;

const DiscussionsContentList = styled.div`
  margin: 0;
  padding: 0;

  @media only screen and (${DEVICES.lg}) {
    padding-left: 1rem;
  }
`;

const DiscussionsContentListItem = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

const DiscussionContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
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

const DiscussionContentBodyText = styled.p`
  font-size: ${({ theme }) => theme.font.body.sm};
  font-weight: 400;
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

