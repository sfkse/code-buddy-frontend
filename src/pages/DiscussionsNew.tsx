import { useContext, useRef, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { RiDraftFill } from "react-icons/ri";
import "draft-js/dist/Draft.css";
import { ContentState, Editor, EditorState, convertToRaw } from "draft-js";

import Button from "../components/Button";
import FormFields from "../components/FormFields";
import DraftEditor from "../components/DraftEditor";
import EditorStyleOptions from "../components/EditorStyleOptions";

import useSetOnStyle from "../hooks/editor/useSetOnStyle";
import { TbCubeSend } from "react-icons/tb";
import SelectMultipleOptions from "../components/notes/SelectMultipleOptions";
import { Tags } from "../types/notes";
import { stateToHTML } from "draft-js-export-html";
import useSubmitDiscussion from "../hooks/discussions/useSubmitDiscussion";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";

const DiscussionsNew = () => {
  const [formState, setFormState] = useState({
    title: "",
    editorState: EditorState.createWithContent(ContentState.createFromText("")),
    content: "",
    tags: [] as Tags[],
  });
  const { authUser } = useFetchAuthUser();
  const { mutate, error, isPending } = useSubmitDiscussion();
  const setEditorState = (editorState: EditorState) => {
    setFormState((prev) => ({
      ...prev,
      editorState: editorState,
    }));
  };

  const { handleOnStyle } = useSetOnStyle(
    setEditorState,
    formState.editorState
  );
  const editorRef = useRef<Editor>(null);

  const formFields = [{ name: "title", type: "text", placeholder: "Title" }];

  const handleSetFormState = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormState((formData) => ({
      ...formData,
      [name]: e.target.value,
    }));
  };

  const handleOnChangeEditor = (editorState: EditorState) => {
    const html = stateToHTML(editorState.getCurrentContent());
    console.log(editorState.getCurrentContent().toObject());
    setFormState((prev) => ({
      ...prev,
      editorState: editorState,
      content: html,
    }));
  };

  const handleOnChangeTags = (tags: any) => {
    setFormState((prev) => ({
      ...prev,
      tags: tags,
    }));
  };

  const handleOnSubmitDiscussion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      title: formState.title,
      content: JSON.stringify(
        convertToRaw(formState.editorState.getCurrentContent())
      ),
      tags: formState.tags,
      owner: authUser.idusers,
    });
  };
  console.log(authUser);
  return (
    <DiscussionNewContentWrapper>
      <DiscussionNewFormWrapper>
        <SelectDiscussionTags
          placeholder="Tags for the discussion..."
          handleOnChangeSelect={handleOnChangeTags}
          options={[]}
          value={formState.tags}
        />
        <FormFields
          formFields={formFields}
          formState={formState}
          handleSetFormState={handleSetFormState}
        />

        <EditorStyleOptions handleOnStyle={handleOnStyle} />
        <DraftEditor
          size="sm"
          editorRef={editorRef}
          editorState={formState.editorState}
          handleOnChangeEditor={handleOnChangeEditor}
        />
        <ButtonWrapper>
          {/* <Button type="submit" title="Save as draft" icon={<RiDraftFill />} /> */}
          <Button
            type="submit"
            title="Publish"
            variant="primary"
            icon={<TbCubeSend />}
            onClick={handleOnSubmitDiscussion}
          />
        </ButtonWrapper>
      </DiscussionNewFormWrapper>
    </DiscussionNewContentWrapper>
  );
};

export default DiscussionsNew;

const DiscussionNewContentWrapper = styled.div`
  width: 100%;
  padding: 2rem 2rem 2rem 0;
`;

const DiscussionNewFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

const SelectDiscussionTags = styled(SelectMultipleOptions)`
  position: absolute;
  z-index: 10;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

