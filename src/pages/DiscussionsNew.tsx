import { useContext, useRef, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { RiDraftFill } from "react-icons/ri";
import "draft-js/dist/Draft.css";
import { Editor, EditorState } from "draft-js";

import SelectMultiple from "../components/SelectMultiple";
import Button from "../components/Button";
import FormFields from "../components/FormFields";
import DraftEditor from "../components/DraftEditor";
import EditorStyleOptions from "../components/EditorStyleOptions";

import useSetOnStyle from "../hooks/editor/useSetOnStyle";
import { TbCubeSend } from "react-icons/tb";

const DiscussionsNew = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { handleOnStyle } = useSetOnStyle(setEditorState, editorState);
  const editorRef = useRef<Editor>(null);
  const themeContext = useContext(ThemeContext);

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
    setEditorState(editorState);
  };

  const fetchTags = () => {
    return [
      {
        color: themeContext?.colors.primaryExtraLight,
        label: "General",
        value: "General",
      },
      {
        color: themeContext?.colors.primaryExtraLight,
        label: "Work",
        value: "Work",
      },
      {
        color: themeContext?.colors.primaryExtraLight,
        label: "Personal",
        value: "Personal",
      },
    ];
  };

  return (
    <DiscussionNewContentWrapper>
      <DiscussionNewFormWrapper>
        <SelectDiscussionTags
          options={fetchTags()}
          placeholder="Select tags..."
        />
        <FormFields
          formFields={formFields}
          formState={formState}
          handleSetFormState={handleSetFormState}
        />

        <EditorStyleOptions handleOnStyle={handleOnStyle} />
        <DraftEditor
          editorRef={editorRef}
          editorState={editorState}
          handleOnChangeEditor={handleOnChangeEditor}
        />
        <ButtonWrapper>
          <Button type="submit" title="Save as draft" icon={<RiDraftFill />} />
          <Button
            type="submit"
            title="Publish"
            variant="primary"
            icon={<TbCubeSend />}
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

const SelectDiscussionTags = styled(SelectMultiple)`
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

