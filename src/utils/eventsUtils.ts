import dayjs from "dayjs";
import { EditorState, convertFromRaw } from "draft-js";

export const EVENT_STATUS = {
  DRAFT: -2,
  REVIEW: -1,
  INACTIVE: 0,
  ACTIVE: 1,
  COMPLETED: 2,
  CANCELLED: 3,
};

export const formatEventDate = (date: number) => {
  return dayjs.unix(date).format("D MMM, YYYY | hh:mm A (CET)");
};

export const getContentFromEditorState = (content: string) => {
  return EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
    .getCurrentContent()
    .getPlainText();
};

