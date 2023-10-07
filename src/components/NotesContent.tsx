import { useRef, useState } from "react";
import styled from "styled-components";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

import NoteContentToolbar from "./NoteContentToolbar";
import EditorStyleOptions from "./EditorStyleOptions";

import { EDITOR_STYLE_MAP } from "../styles/theme";
import SelectMultiple from "./SelectMultiple";
import useSetOnStyle from "../hooks/editor/useSetOnStyle";

const NotesContent = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef<Editor>(null);
  const { handleOnStyle } = useSetOnStyle(setEditorState, editorState);

  const handleOnChangeEditor = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const handleDeleteNote = () => {
    console.log("Delete note");
  };
  return (
    <NotesContentWrapper>
      <NoteContentToolbarWrapper>
        <NoteContentToolbar handleDeleteNote={handleDeleteNote} />
        <EditorStyleOptions handleOnStyle={handleOnStyle} />
      </NoteContentToolbarWrapper>
      <NoteTagsWrapper>
        <SelectNoteTags
          options={[
            { color: "green", label: "General", value: "General" },
            { color: "red", label: "Work", value: "Work" },
            { color: "blue", label: "Personal", value: "Personal" },
          ]}
        />
      </NoteTagsWrapper>
      <EditorWrapper onClick={() => editorRef.current?.focus()}>
        <Editor
          ref={editorRef}
          editorState={editorState}
          onChange={handleOnChangeEditor}
          customStyleMap={EDITOR_STYLE_MAP}
        />
      </EditorWrapper>
    </NotesContentWrapper>
  );
};

export default NotesContent;

const NotesContentWrapper = styled.div`
  width: 100%;
  padding: 2rem 2rem 2rem 0;
`;

const NoteContentToolbarWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const NoteTagsWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  z-index: 10;
`;

const SelectNoteTags = styled(SelectMultiple)`
  position: absolute;
  z-index: 10;
  margin-bottom: 1rem;
`;

const EditorWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: 4px;
  min-height: 70vh;
  max-height: 70vh;
  overflow-y: scroll;
`;

