import styled from "styled-components";
import { BsChevronDoubleDown, BsReplyFill } from "react-icons/bs";
import { CgArrowDownO, CgArrowUpO } from "react-icons/cg";

import Avatar from "../Avatar";
import useFetchDiscussionComments from "../../hooks/discussions/useFetchDiscussionComments";
import Loader from "../Loader";
import ToastMessage from "../ToastMessage";
import { DiscussionComment } from "../../types/discussions";
import { convertPassedDaysFromTimestamp } from "../../utils/dateUtils";
import DraftEditor from "../DraftEditor";
import { getEditorStateFromRaw } from "../../utils/editorUtils";
import { Editor } from "draft-js";
import { useRef } from "react";

type DiscussionCommentsProps = {
  discussionId?: string;
};

const DiscussionComments = ({ discussionId }: DiscussionCommentsProps) => {
  const { comments, isPending, error } =
    useFetchDiscussionComments(discussionId);

  const editorRef = useRef<Editor>(null);
  return (
    <Loader isLoading={isPending}>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <DiscussionCommentsWrapper>
        {comments?.map((comment: DiscussionComment) => (
          <DiscussionCommentItem
            key={comment.iddiscussioncomments}
            $type="commentOwner"
          >
            <DiscussionCommentHeaderWrapper>
              <DiscussionCommentHeaderTitleWrapper>
                <DiscussionCommentHeaderTitle>
                  <Avatar name="Karin Benzema" />
                  <DiscussionCommentHeaderTitleUsername>
                    {/* {comment.user} */}
                  </DiscussionCommentHeaderTitleUsername>
                </DiscussionCommentHeaderTitle>
              </DiscussionCommentHeaderTitleWrapper>
              <DiscussionCommentHeaderInfoWrapper>
                <DiscussionCommentHeaderInfoDate>
                  {convertPassedDaysFromTimestamp(comment.created) < 2
                    ? "Today"
                    : convertPassedDaysFromTimestamp(comment.created) +
                      " days ago"}
                </DiscussionCommentHeaderInfoDate>
              </DiscussionCommentHeaderInfoWrapper>
            </DiscussionCommentHeaderWrapper>
            <DiscussionCommentBodyWrapper>
              <DiscussionCommentBodyText>
                {/* TODO: standardize the getEditorStateFromRaw function. expecting 'content' we send 'comment' here */}
                {/* <DraftEditor
                  readOnly={true}
                  readOnlyAndLarge={true}
                  editorRef={editorRef}
                  editorState={
                    comments.length > 0 && getEditorStateFromRaw(comment)
                  }
                  handleOnChangeEditor={() => console.log("changed")}
                /> */}
              </DiscussionCommentBodyText>
            </DiscussionCommentBodyWrapper>
            <DiscussionCommentVotesAndOptionsWrapper>
              <DiscussionCommentVotesWrapper>
                <DiscussionCommentVotes>
                  <DiscussionCommentVotesUp>
                    <DiscussionCommentVotesUpIcon />
                  </DiscussionCommentVotesUp>
                  <DiscussionCommentVotesCount>
                    {comment.upvote}
                  </DiscussionCommentVotesCount>
                  <DiscussionCommentVotesDown>
                    <DiscussionCommentVotesDownIcon />
                  </DiscussionCommentVotesDown>
                  <DiscussionCommentVotesCount>
                    {comment.downvote}
                  </DiscussionCommentVotesCount>
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
        ))}
      </DiscussionCommentsWrapper>
    </Loader>
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
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const DiscussionCommentHeaderTitleUsername = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 500;
  margin-left: 0.5rem;
`;

const DiscussionCommentHeaderInfoWrapper = styled.div``;

const DiscussionCommentHeaderInfoDate = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 400;
`;

const DiscussionCommentBodyWrapper = styled.div``;

const DiscussionCommentBodyText = styled.p`
  font-size: ${({ theme }) => theme.font.body.sm};
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
  font-size: ${({ theme }) => theme.font.heading.base};
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionCommentVotesDown = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DiscussionCommentVotesDownIcon = styled(CgArrowDownO)`
  font-size: ${({ theme }) => theme.font.heading.base};
  color: ${({ theme }) => theme.colors.primary};
`;

const DiscussionCommentVotesCount = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
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
  font-size: ${({ theme }) => theme.font.body.base};
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.yellow};
`;

const DiscussionCommentReplyIcon = styled(BsReplyFill)`
  font-size: ${({ theme }) => theme.font.body.base};
  margin: 0 2px;
  color: ${({ theme }) => theme.colors.yellow};
`;

const DiscussionCommentOptionsIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.body.xs};
  cursor: pointer;
`;

