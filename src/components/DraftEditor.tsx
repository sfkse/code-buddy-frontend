import { Editor, EditorState } from "draft-js";
import styled from "styled-components";

import { EDITOR_STYLE_MAP } from "../styles/theme";

type DraftEditorProps = {
  editorRef: React.MutableRefObject<Editor | null>;
  editorState: EditorState;
  size?: string;
  handleOnChangeEditor: (editorState: EditorState) => void;
};

const DraftEditor = ({
  editorRef,
  editorState,
  size,
  handleOnChangeEditor,
}: DraftEditorProps) => {
  return (
    <EditorWrapper $size={size} onClick={() => editorRef.current?.focus()}>
      <Editor
        ref={editorRef}
        editorState={editorState}
        onChange={handleOnChangeEditor}
        customStyleMap={EDITOR_STYLE_MAP}
      />
    </EditorWrapper>
  );
};

export default DraftEditor;

const EditorWrapper = styled.div<{ $size: string | undefined }>`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: 4px;
  min-height: ${({ $size }) => ($size === "sm" ? "10rem" : "70vh")};
  max-height: ${({ $size }) => ($size === "sm" ? "10rem" : "70vh")};
  overflow-y: scroll;
`;

