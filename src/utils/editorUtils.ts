import {
  ContentState,
  EditorState,
  RawDraftContentState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import { Note } from "../types/notes";
import { DiscussionComment } from "../types/discussions";

export const getEditorStateFromRaw = (
  content: Note["content"] | DiscussionComment
): EditorState => {
  return EditorState.createWithContent(convertFromRaw(getRawContent(content)));
};

export const getRawContent = (
  content: Note["content"]
): RawDraftContentState => {
  return JSON.parse(content);
};

export const getPlainContent = (content: Note["content"]): string => {
  return getEditorStateFromRaw(content).getCurrentContent().getPlainText();
};

export const createDefaultContent = () => {
  return JSON.stringify(
    convertToRaw(ContentState.createFromText("Add some content!"))
  );
};

