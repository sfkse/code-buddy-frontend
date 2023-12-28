import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ContentState, Editor, EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { stateToHTML } from "draft-js-export-html";

import NoteContentToolbar from "./NoteContentToolbar";
import EditorStyleOptions from "../EditorStyleOptions";
// import SelectMultiple from "../SelectMultiple";
import DraftEditor from "../DraftEditor";
import ToastMessage from "../ToastMessage";
import Loader from "../Loader";
import SelectMultipleOptions from "./SelectMultipleOptions";

import useSetOnStyle from "../../hooks/editor/useSetOnStyle";
import useSaveUserNote from "../../hooks/notes/useSaveUserNote";
import useDeleteUserNote from "../../hooks/notes/useDeleteUserNote";

import { DEVICES } from "../../styles/theme";
import { Note, Tags } from "../../types/notes";
import { copyDeep } from "../../utils/utils";
import { getEditorStateFromRaw } from "../../utils/editorUtils";

type NotesContentProps = {
  selectedNote: Note;
  setSelectedNote: React.Dispatch<React.SetStateAction<Note | undefined>>;
};

const NotesContent = ({ selectedNote, setSelectedNote }: NotesContentProps) => {
  const [formState, setFormState] = useState({
    dataChanged: false,
    editorState: EditorState.createWithContent(ContentState.createFromText("")),
    initialState: { html: "", title: "", tags: [] as Tags[] },
    currentState: { html: "", title: "", tags: [] as Tags[] },
  });

  const editorRef = useRef<Editor>(null);

  const setEditorState = (editorState: EditorState) => {
    setFormState((prev) => ({
      ...prev,
      editorState: editorState,
    }));
  };
  const { handleOnStyle } = useSetOnStyle(
    setEditorState,
    formState.editorState
  );

  const { mutate, error, isLoading } = useSaveUserNote({
    idnotes: selectedNote?.idnotes,
    title: formState.currentState.title,
    type: "1",
    active: true,
    tags: formState.currentState.tags,
    owner: selectedNote?.owner,
    content: JSON.stringify(
      convertToRaw(formState.editorState.getCurrentContent())
    ),
  });

  const { mutateDelete } = useDeleteUserNote(
    selectedNote?.idnotes,
    selectedNote?.owner
  );

  useEffect(() => {
    if (selectedNote) {
      setInitialData();
    }
  }, [selectedNote.content]);

  const setInitialData = () => {
    setFormState({
      dataChanged: false,
      editorState: getEditorStateFromRaw(selectedNote.content),
      initialState: {
        html: selectedNote.content,
        title: selectedNote.title,
        tags: selectedNote.tags,
      },
      currentState: {
        html: selectedNote.content,
        title: selectedNote.title,
        tags: selectedNote.tags,
      },
    });
  };
  console.log(selectedNote);
  const handleOnChangeEditor = (editorState: EditorState) => {
    const html = stateToHTML(editorState.getCurrentContent());

    setFormState((prev) => ({
      ...prev,
      dataChanged,
      editorState,
      currentState: { ...prev.currentState, html },
    }));
    const dataChanged = fieldChangeHandler({ html });
  };

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dataChanged = fieldChangeHandler({ title: e.target.value });
    setFormState((prev) => ({
      ...prev,
      dataChanged,
      currentState: { ...prev.currentState, title: e.target.value },
    }));
  };

  const handleOnChangeTags = (tags: any) => {
    const dataChanged = fieldChangeHandler({ tags: tags });
    setFormState((prev) => ({
      ...prev,
      dataChanged,
      currentState: { ...prev.currentState, tags: tags },
    }));
  };
  //Checks if the initial form values are equal to current form values
  //Does a deep equality check i.e. checks equality of nested arrays and objects
  const fieldChangeHandler = (newState: object) => {
    const initialValues = Object.values(
      copyDeep(formState.initialState)
    ) as Array<[]>;
    const currentValues = Object.values(copyDeep(newState)) as Array<[]>;

    for (let i = 0; i < currentValues.length; i++) {
      const el = Array.isArray(currentValues[i])
        ? currentValues[i].sort().join("")
        : currentValues[i];

      const initialEl =
        initialValues[i] === undefined
          ? ""
          : Array.isArray(initialValues[i])
          ? initialValues[i].sort().join("")
          : initialValues[i];

      if (el !== initialEl) {
        closeWindowListener(true);
        return true;
      }
    }
    closeWindowListener(false);
    return false;
  };

  //Prevents user from closing tab or changing URL if changes have been made to form.
  const closeWindowListener = (value: boolean) => {
    window.onbeforeunload = () => {
      if (value) return "";
    };
  };

  const handleOnClickSave = () => {
    mutate();
  };

  const handleDeleteNote = () => {
    mutateDelete();
    setSelectedNote(undefined);
  };

  return (
    <Loader isLoading={isLoading}>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <NotesContentWrapper>
        <NoteContentToolbarWrapper>
          <NoteContentToolbar
            handleOnClickSave={handleOnClickSave}
            handleDeleteNote={handleDeleteNote}
          />
          <EditorStyleOptions handleOnStyle={handleOnStyle} />
        </NoteContentToolbarWrapper>
        <NoteTagsWrapper>
          <SelectNoteTag
            placeholder="Tag your note..."
            handleOnChangeSelect={handleOnChangeTags}
            options={[]}
            value={formState.currentState.tags}
          />
        </NoteTagsWrapper>
        <NoteTitle
          placeholder="Enter a title..."
          value={formState.currentState.title}
          onChange={handleOnChangeTitle}
        />
        <DraftEditor
          editorRef={editorRef}
          editorState={formState.editorState}
          handleOnChangeEditor={handleOnChangeEditor}
        />
      </NotesContentWrapper>
    </Loader>
  );
};

export default NotesContent;

const NotesContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  padding-bottom: 0;

  @media only screen and (${DEVICES.md}) {
    padding: 1rem;
  }
`;

const NoteContentToolbarWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (${DEVICES.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const NoteTagsWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  z-index: 10;
`;

const SelectNoteTag = styled(SelectMultipleOptions)`
  position: absolute;
  z-index: 10;
  margin-bottom: 1rem;
`;

const NoteTitle = styled.input`
  width: 100%;
  font-weight: 700;
  margin-bottom: 1rem;
  background-color: transparent;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
    font-weight: normal;
    font-size: 0.9rem;
  }
`;

