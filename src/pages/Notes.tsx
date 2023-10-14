import styled from "styled-components";

import NotesList from "../components/notes/NotesList";
import NotesContent from "../components/notes/NotesContent";

import { DEVICES } from "../styles/theme";

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
  grid-template-columns: 1fr 2.5fr;
  padding-bottom: 2rem;

  @media only screen and (${DEVICES.md}) {
    grid-template-columns: 1fr;
    font-size: 2rem;
  }
`;

