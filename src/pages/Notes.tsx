import styled from "styled-components";
import { useState } from "react";

import NotesList from "../components/notes/NotesList";
import NotesContent from "../components/notes/NotesContent";
import Loader from "../components/Loader";
import ToastMessage from "../components/ToastMessage";

import useFetchUserNotes from "../hooks/notes/useFetchUserNotes";

import { DEVICES } from "../styles/theme";
import { Note } from "../types/notes";
import { fetchCredentials } from "../utils/userUtils";

const Notes = () => {
  const userID = fetchCredentials();
  const { notes, isLoading, error } = useFetchUserNotes(userID);

  const [selectedNote, setSelectedNote] = useState<Note>();

  const handleOnClickNote = (id: Note["idnotes"]) => {
    setSelectedNote(notes?.find((note) => note.idnotes === id));
  };

  return (
    <Loader isLoading={isLoading}>
      {error ? (
        <ToastMessage
          text={error instanceof Error ? error.response.data.message : ""}
        />
      ) : null}
      <NotesWrapper>
        <NotesList
          notes={notes || []}
          selectedNote={selectedNote}
          handleOnClickNote={handleOnClickNote}
        />
        {selectedNote ? (
          <NotesContent
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
          />
        ) : (
          <EmptySelectedNoteWrapper>
            <EmptySelectedNoteText>
              Select or create a note to start editing
            </EmptySelectedNoteText>
          </EmptySelectedNoteWrapper>
        )}
      </NotesWrapper>
    </Loader>
  );
};
export default Notes;

const NotesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  padding-bottom: 2rem;

  @media only screen and (${DEVICES.md}) {
    grid-template-columns: 1fr;
  }
`;

const EmptySelectedNoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const EmptySelectedNoteText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`;

