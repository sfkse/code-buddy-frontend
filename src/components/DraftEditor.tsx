import { Editor, EditorState } from "draft-js";
import styled from "styled-components";

import { EDITOR_STYLE_MAP } from "../styles/theme";

type DraftEditorProps = {
  editorRef: React.MutableRefObject<Editor | null>;
  editorState: EditorState;
  size?: string;
  readOnly?: boolean;
  readOnlyAndLarge?: boolean;
  handleOnChangeEditor: (editorState: EditorState) => void;
};

const DraftEditor = ({
  editorRef,
  editorState,
  size,
  readOnly,
  readOnlyAndLarge,
  handleOnChangeEditor,
}: DraftEditorProps) => {
  return (
    <EditorWrapper
      $size={size}
      $readOnly={readOnly}
      $readOnlyAndLarge={readOnlyAndLarge}
      onClick={() => editorRef.current?.focus()}
    >
      <Editor
        ref={editorRef}
        editorState={editorState}
        onChange={handleOnChangeEditor}
        customStyleMap={EDITOR_STYLE_MAP}
        readOnly={readOnly}
      />
    </EditorWrapper>
  );
};

export default DraftEditor;

const EditorWrapper = styled.div<{
  $size: string | undefined;
  $readOnly: boolean | undefined;
  $readOnlyAndLarge: boolean | undefined;
}>`
  border: ${({ theme, $readOnly }) =>
    !$readOnly ? `1px solid ${theme.colors.secondary}` : "none"};
  padding: 1rem;
  border-radius: 4px;
  min-height: ${({ $size, $readOnly, $readOnlyAndLarge }) =>
    $size === "sm"
      ? "8rem"
      : $readOnly && !$readOnlyAndLarge
      ? "1rem"
      : $readOnlyAndLarge
      ? "fit-content"
      : "65vh"};
  /* max-height: ${({ $size }) => ($size === "sm" ? "8rem" : "65vh")}; */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

