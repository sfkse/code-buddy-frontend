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
  display: flex;
  flex-direction: row;
  height: 100%;
`;

