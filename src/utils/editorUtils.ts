import {
  ContentState,
  EditorState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import { Note } from "../types/notes";

export const getEditorStateFromRaw = (note: Note): EditorState => {
  return EditorState.createWithContent(convertFromRaw(getRawContent(note)));
};

export const getRawContent = (note: Note): RawDraftContentState => {
  return JSON.parse(note.content);
};

export const getPlainContent = (note: Note): string => {
  return getEditorStateFromRaw(note).getCurrentContent().getPlainText();
};

export const createDefaultContent = () => {
  return JSON.stringify(
    convertToRaw(ContentState.createFromText("Add some content!"))
  );
};

