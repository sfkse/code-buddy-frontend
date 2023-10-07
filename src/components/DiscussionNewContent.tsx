import styled, { ThemeContext } from "styled-components";
import Button from "./Button";
import FormFields from "./FormFields";
import { useContext, useRef, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { Editor, EditorState } from "draft-js";
import { EDITOR_STYLE_MAP } from "../styles/theme";
import "draft-js/dist/Draft.css";
import EditorStyleOptions from "./EditorStyleOptions";
import useSetOnStyle from "../hooks/editor/useSetOnStyle";
import SelectMultiple from "./SelectMultiple";

const DiscussionNewContent = () => {
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
        <SelectNoteTags options={fetchTags()} />
        <FormFields
          formFields={formFields}
          formState={formState}
          handleSetFormState={handleSetFormState}
        />
        <EditorWrapper onClick={() => editorRef.current?.focus()}>
          <EditorStyleOptions handleOnStyle={handleOnStyle} />
          <Editor
            ref={editorRef}
            editorState={editorState}
            onChange={handleOnChangeEditor}
            customStyleMap={EDITOR_STYLE_MAP}
          />
        </EditorWrapper>
        <ButtonWrapper>
          <Button type="submit" title="Save as draft" />
          <Button
            type="submit"
            title="Publish"
            variant="primary"
            icon={<IoSendSharp />}
          />
        </ButtonWrapper>
      </DiscussionNewFormWrapper>
    </DiscussionNewContentWrapper>
  );
};

export default DiscussionNewContent;

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

const SelectNoteTags = styled(SelectMultiple)`
  position: absolute;
  z-index: 10;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 50%;
  gap: 1rem;
  align-self: flex-end;
  margin-top: 1rem;
`;

const EditorWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: 4px;
  min-height: 50rem;
  max-height: 50rem;
  overflow-y: scroll;
`;

