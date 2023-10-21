import { useRef, useState } from "react";
import styled from "styled-components";
import { Editor, EditorState } from "draft-js";
import { FiSave } from "react-icons/fi";

import Card from "../components/Card";
import DraftEditor from "../components/DraftEditor";
import EditorStyleOptions from "../components/EditorStyleOptions";
import Button from "../components/Button";
import DiscussionComments from "../components/discussions/DiscussionComments";
import Avatar from "../components/Avatar";
import UserInfoPopUp from "../components/UserInfoPopUp";

import useSetOnStyle from "../hooks/editor/useSetOnStyle";

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

const DiscussionsQuestionsDetail = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef<Editor>(null);
  const { handleOnStyle } = useSetOnStyle(setEditorState, editorState);

  const handleOnChangeEditor = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const handleOpenUserPopUp = () => {
    setIsOpenPopUp(!isOpenPopUp);
  };

  return (
    <DiscussionsQuestionsDetailWrapper>
      <Card>
        <DiscussionsQuestionsDetailContentWrapper>
          <DiscussionsQuestionsDetailContentHeaderWrapper>
            <DiscussionsQuestionsDetailContentHeaderTitleWrapper>
              <DiscussionsQuestionsDetailContentHeaderTitle>
                How to use React Hooks?
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
                      <UserInfoPopUp type="noAction" user={userObject} />
                    </DiscussionsQuestionUserPopUpWrapper>
                  </DiscussionsQuestionsDetailContentHeaderInfoAuthorAvatar>
                  <DiscussionsQuestionsDetailContentHeaderInfoAuthorName>
                    @karinbenzema
                  </DiscussionsQuestionsDetailContentHeaderInfoAuthorName>
                </DiscussionsQuestionsDetailContentHeaderInfoAuthor>
                <DiscussionsQuestionsDetailContentHeaderInfoDate>
                  2 days ago
                </DiscussionsQuestionsDetailContentHeaderInfoDate>
              </DiscussionsQuestionsDetailContentHeaderInfo>
              <DiscussionsQuestionsDetailContentHeaderTags>
                <DiscussionsQuestionsDetailContentHeaderTag>
                  General
                </DiscussionsQuestionsDetailContentHeaderTag>
                <DiscussionsQuestionsDetailContentHeaderTag>
                  Work
                </DiscussionsQuestionsDetailContentHeaderTag>
              </DiscussionsQuestionsDetailContentHeaderTags>
            </DiscussionsQuestionsDetailContentHeaderInfoWrapper>
          </DiscussionsQuestionsDetailContentHeaderWrapper>
          <DiscussionsQuestionsDetailContentBodyWrapper>
            <DiscussionsQuestionsDetailContentBody>
              <DiscussionsQuestionsDetailContentBodyText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam doloribus, voluptatum, quae, quod voluptatem voluptas
                voluptate tempora quos quibusdam natus doloremque. Voluptate,
                voluptatum doloremque. Quisquam doloribus, voluptatum, quae,
                quod voluptatem voluptas voluptate tempora quos quibusdam natus
                doloremque. Voluptate, voluptatum doloremque.
              </DiscussionsQuestionsDetailContentBodyText>
              <DiscussionsQuestionsDetailContentBodyText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam doloribus, voluptatum, quae,
              </DiscussionsQuestionsDetailContentBodyText>
              <DiscussionsQuestionsDetailContentBodyText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam doloribus, voluptatum, quae,
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
          title="SAVE"
          icon={<FiSave />}
          variant="primary"
          customStyle={{ alignSelf: "flex-end", marginTop: "1rem" }}
        />
      </DiscussionsQuestionsDetailSuggestionsWrapper>
      <DiscussionComments />
    </DiscussionsQuestionsDetailWrapper>
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
  font-weight: 700;
  margin: 2rem 0;
`;

