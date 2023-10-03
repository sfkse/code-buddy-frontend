import { useRef, useState } from "react";
import styled from "styled-components";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

import NoteContentToolbar from "./NoteContentToolbar";
import SelectMultiple from "./SelectMultiple";

import { EDITOR_STYLE_MAP } from "../styles/theme";

const NotesContent = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isOpenTags, setIsOpenTags] = useState(false);
  const editorRef = useRef<Editor>(null);

  const handleOnChangeEditor = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  // TODO: Add attach functionality
  // TODO: Handle attach button click
  const handleOnStyle = (style: string) => {
    const blockTypes = ["ordered-list-item", "unordered-list-item"];

    if (blockTypes.includes(style))
      return setEditorState(RichUtils.toggleBlockType(editorState, style));

    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleOpenTags = () => {
    setIsOpenTags(!isOpenTags);
  };

  const handleDeleteNote = () => {
    console.log("Delete note");
  };
  return (
    <NotesContentWrapper>
      <NoteContentToolbar
        handleOnStyle={handleOnStyle}
        handleOpenTags={handleOpenTags}
        handleDeleteNote={handleDeleteNote}
      />
      {isOpenTags && (
        <NoteTagsWrapper>
          <SelectNoteTags />
        </NoteTagsWrapper>
      )}

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
  width: 70%;
  padding: 2rem 2rem 2rem 0;
`;
const EditorWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: 4px;
  min-height: 90%;
  max-height: 90%;
  overflow-y: scroll;
  /* margin-top: 5rem; */
`;

const NoteTagsWrapper = styled.div`
  margin-bottom: 1rem;
`;

const SelectNoteTags = styled(SelectMultiple)`
  margin-bottom: 1rem;
`;

