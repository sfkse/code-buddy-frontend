import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Editor, EditorState, convertToRaw } from "draft-js";
import { BsSendDash } from "react-icons/bs";
import { useLocation } from "react-router-dom";

import Card from "../components/Card";
import DraftEditor from "../components/DraftEditor";
import EditorStyleOptions from "../components/EditorStyleOptions";
import Button from "../components/Button";
import DiscussionComments from "../components/discussions/DiscussionComments";
import Avatar from "../components/Avatar";
import UserInfoPopUp from "../components/UserInfoPopUp";
import Loader from "../components/Loader";
import ToastMessage from "../components/ToastMessage";

import useSetOnStyle from "../hooks/editor/useSetOnStyle";
import useFetchSingleDiscussion from "../hooks/discussions/useFetchSingleDiscussion";

import { convertPassedDaysFromTimestamp } from "../utils/dateUtils";
import { getEditorStateFromRaw } from "../utils/editorUtils";
import { Tags } from "../types/notes";
import useSubmitComment from "../hooks/discussions/useSubmitComment";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";

const DiscussionsQuestionsDetail = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef<Editor>(null);
  const location = useLocation();
  const discussionId = location.pathname.split("/")[3];

  const { authUser } = useFetchAuthUser();
  const { discussion, isPending, error } =
    useFetchSingleDiscussion(discussionId);

  const { mutate, errorSubmitComment, isSubmitCommentPending } =
    useSubmitComment(discussionId);

  const { handleOnStyle } = useSetOnStyle(setEditorState, editorState);
  const isLoading = isPending || isSubmitCommentPending;
  const isError = error || errorSubmitComment;

  const handleOnChangeEditor = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const handleOpenUserPopUp = () => {
    setIsOpenPopUp(!isOpenPopUp);
  };

  const onSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      comment: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      idUser: authUser.idusers,
      iddiscussions: discussionId,
    });
  };
  return (
    <Loader isLoading={isLoading}>
      {isError ? (
        <ToastMessage text={isError instanceof Error ? isError.message : ""} />
      ) : null}
      {discussion && Object.keys(discussion).length > 0 && (
        <DiscussionsQuestionsDetailWrapper>
          <Card>
            <DiscussionsQuestionsDetailContentWrapper>
              <DiscussionsQuestionsDetailContentHeaderWrapper>
                <DiscussionsQuestionsDetailContentHeaderTitleWrapper>
                  <DiscussionsQuestionsDetailContentHeaderTitle>
                    {discussion.title}
                  </DiscussionsQuestionsDetailContentHeaderTitle>
                </DiscussionsQuestionsDetailContentHeaderTitleWrapper>
                <DiscussionsQuestionsDetailContentHeaderInfoWrapper>
                  <DiscussionsQuestionsDetailContentHeaderInfo>
                    <DiscussionsQuestionsDetailContentHeaderInfoAuthor>
                      <DiscussionsQuestionsDetailContentHeaderInfoAuthorAvatar
                        onClick={handleOpenUserPopUp}
                      >
                        <Avatar name="Hansa Köse" />
                        <DiscussionsQuestionUserPopUpWrapper
                          $isopenpopup={isOpenPopUp}
                        >
                          <UserInfoPopUp
                            type="noAction"
                            user={discussion.user}
                          />
                        </DiscussionsQuestionUserPopUpWrapper>
                      </DiscussionsQuestionsDetailContentHeaderInfoAuthorAvatar>
                      <DiscussionsQuestionsDetailContentHeaderInfoAuthorName>
                        @karinbenzema
                      </DiscussionsQuestionsDetailContentHeaderInfoAuthorName>
                    </DiscussionsQuestionsDetailContentHeaderInfoAuthor>
                    <DiscussionsQuestionsDetailContentHeaderInfoDate>
                      {convertPassedDaysFromTimestamp(discussion.created) < 2
                        ? "Today"
                        : convertPassedDaysFromTimestamp(discussion.created) +
                          " days ago"}
                    </DiscussionsQuestionsDetailContentHeaderInfoDate>
                  </DiscussionsQuestionsDetailContentHeaderInfo>
                  <DiscussionsQuestionsDetailContentHeaderTags>
                    {discussion.tags?.map((tag: Tags) => (
                      <DiscussionsQuestionsDetailContentHeaderTag
                        key={tag.value}
                      >
                        {tag.label}
                      </DiscussionsQuestionsDetailContentHeaderTag>
                    ))}
                  </DiscussionsQuestionsDetailContentHeaderTags>
                </DiscussionsQuestionsDetailContentHeaderInfoWrapper>
              </DiscussionsQuestionsDetailContentHeaderWrapper>
              <DiscussionsQuestionsDetailContentBodyWrapper>
                <DiscussionsQuestionsDetailContentBody>
                  <DiscussionsQuestionsDetailContentBodyText>
                    <DraftEditor
                      readOnly={true}
                      readOnlyAndLarge={true}
                      editorRef={editorRef}
                      editorState={
                        discussion && getEditorStateFromRaw(discussion)
                      }
                      handleOnChangeEditor={() => console.log("changed")}
                    />
                  </DiscussionsQuestionsDetailContentBodyText>
                </DiscussionsQuestionsDetailContentBody>
              </DiscussionsQuestionsDetailContentBodyWrapper>
            </DiscussionsQuestionsDetailContentWrapper>
          </Card>

          <DiscussionsQuestionsDetailSuggestionsWrapper>
            <DiscussionsQuestionsDetailSuggestionsTitle>
              Do you have any suggestions?
            </DiscussionsQuestionsDetailSuggestionsTitle>
            <EditorStyleOptions handleOnStyle={handleOnStyle} />
            <DraftEditor
              size="sm"
              editorRef={editorRef}
              editorState={editorState}
              handleOnChangeEditor={handleOnChangeEditor}
            />
            <Button
              title="SUBMIT"
              icon={<BsSendDash />}
              variant="primary"
              customStyle={{ alignSelf: "flex-end", marginTop: "1rem" }}
              onClick={onSubmitComment}
            />
          </DiscussionsQuestionsDetailSuggestionsWrapper>
          <DiscussionComments discussionId={discussion.iddiscussions} />
        </DiscussionsQuestionsDetailWrapper>
      )}
    </Loader>
  );
};

export default DiscussionsQuestionsDetail;

const DiscussionsQuestionsDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2rem;
  padding-top: 2rem;
`;

const DiscussionsQuestionsDetailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscussionsQuestionsDetailContentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscussionsQuestionsDetailContentHeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscussionsQuestionsDetailContentHeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.heading.base};
  font-weight: 700;
`;

const DiscussionsQuestionsDetailContentHeaderInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1rem;
`;

const DiscussionsQuestionsDetailContentHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscussionsQuestionsDetailContentHeaderInfoAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const DiscussionsQuestionsDetailContentHeaderInfoAuthorAvatar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const DiscussionsQuestionUserPopUpWrapper = styled.div<{
  $isopenpopup?: boolean;
}>`
  position: absolute;
  top: 110%;
  /* right: -100%; */
  display: none;

  ${({ $isopenpopup }) =>
    $isopenpopup && {
      display: "block",
    }}
`;

const DiscussionsQuestionsDetailContentHeaderInfoAuthorName = styled.span`
  font-size: ${({ theme }) => theme.font.body.sm};
  font-weight: 700;
  margin-left: 0.5rem;
`;

const DiscussionsQuestionsDetailContentHeaderInfoDate = styled.span`
  font-size: ${({ theme }) => theme.font.body.sm};
  font-weight: 400;
`;

const DiscussionsQuestionsDetailContentHeaderTags = styled.div`
  display: flex;
  align-items: center;
`;

const DiscussionsQuestionsDetailContentHeaderTag = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 400;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.caution};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const DiscussionsQuestionsDetailContentBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const DiscussionsQuestionsDetailContentBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscussionsQuestionsDetailContentBodyText = styled.p`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const DiscussionsQuestionsDetailSuggestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const DiscussionsQuestionsDetailSuggestionsTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.body.xl};
  font-weight: 500;
  margin: 2rem 0;
`;

