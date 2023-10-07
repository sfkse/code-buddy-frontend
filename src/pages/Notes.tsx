import styled from "styled-components";

import NotesList from "../components/notes/NotesList";
import NotesContent from "../components/notes/NotesContent";

const Notes = () => {
  return (
    <NotesWrapper>
      <NotesList />
      <NotesContent />
    </NotesWrapper>
  );
};

export default Notes;

const NotesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

