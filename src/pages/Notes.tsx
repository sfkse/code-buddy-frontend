import styled from "styled-components";
import NotesMenu from "../features/notes/NotesMenu";
import { Outlet } from "react-router-dom";

function Notes() {
  return (
    <LayoutWrapper>
      <NotesMenu />
      <Outlet />
    </LayoutWrapper>
  );
}

export default Notes;

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;

  gap: 3rem;
  padding: 2rem 4rem;
`;

