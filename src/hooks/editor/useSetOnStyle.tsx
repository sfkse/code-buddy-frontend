import { EditorState, RichUtils } from "draft-js";

const useSetOnStyle = (
  setEditorState: (editorState: EditorState) => void,
  editorState: EditorState
) => {
  // TODO: Add attach functionality
  // TODO: Handle attach button click
  const handleOnStyle = (style: string) => {
    const blockTypes = ["ordered-list-item", "unordered-list-item"];

    if (blockTypes.includes(style))
      return setEditorState(RichUtils.toggleBlockType(editorState, style));

    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  return { handleOnStyle };
};

export default useSetOnStyle;

