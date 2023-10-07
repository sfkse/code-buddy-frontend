import styled from "styled-components";

import NotesList from "../components/NotesList";
import NotesContent from "../components/NotesContent";

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

