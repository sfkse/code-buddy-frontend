import styled from "styled-components";
import chroma from "chroma-js";

import NotesSetup from "./NotesSetup";

const NotesList = () => {
  const color1 = chroma("green");
  const color2 = chroma("red");

  const handleAddNote = () => {
    console.log("Add note");
  };
  return (
    <NotesListWrapper>
      <NotesSetup handleAddNote={handleAddNote} />
      <Note>
        <NotePropertiesWrapper>
          <NoteTag $color={color1}>General</NoteTag>
          <NoteDate>Today</NoteDate>
        </NotePropertiesWrapper>
        <NoteTitle>My first note</NoteTitle>
        <NoteContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptatibus, quos, accusantium, quibusdam voluptas voluptatem
          voluptatum quod doloribus consequuntur doloremque quae. Quod
          voluptatem, quia tempore voluptatibus voluptas molestias consequatur.
        </NoteContent>
      </Note>
      <Note>
        <NotePropertiesWrapper>
          <NoteTag $color={color2}>Primary</NoteTag>
          <NoteDate>Today</NoteDate>
        </NotePropertiesWrapper>
        <NoteTitle>My first note</NoteTitle>
        <NoteContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptatibus, quos, accusantium, quibusdam voluptas voluptatem
          voluptatum quod doloribus consequuntur doloremque quae. Quod
          voluptatem, quia tempore voluptatibus voluptas molestias consequatur.
        </NoteContent>
      </Note>
    </NotesListWrapper>
  );
};

export default NotesList;

const NotesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Note = styled.li`
  padding: 1rem 2rem;
  list-style: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NotePropertiesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
`;

const NoteTag = styled.span<{ $color: chroma.Color }>`
  font-size: 0.65rem;
  border-radius: 0.2rem;
  color: ${({ $color }) => $color.css()};
  background-color: ${({ $color }) => $color?.alpha(0.3).css()};
  padding: 0.2rem 0.5rem;
  display: inline-block;
`;

const NoteDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

const NoteTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 900;
`;

const NoteContent = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

