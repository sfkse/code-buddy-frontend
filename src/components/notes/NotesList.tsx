import { useEffect, useState } from "react";
import styled from "styled-components";
import chroma from "chroma-js";
import moment from "moment";

import NotesSetup from "./NotesSetup";
import ToastMessage from "../ToastMessage";
import Loader from "../Loader";

import useAddUserNote from "../../hooks/notes/useAddUserNote";

import { DEVICES } from "../../styles/theme";
import { Note, Tags } from "../../types/notes";
import { createDefaultContent, getPlainContent } from "../../utils/editorUtils";
import { useNavigate } from "react-router-dom";

type NotesListProps = {
  isAuthenticated: boolean;
  idOwner: Note["owner"];
  notes: Note[];
  selectedNote?: Note;
  handleOnClickNote: (id: Note["idnotes"]) => void;
};

const NotesList = ({
  isAuthenticated,
  idOwner,
  notes,
  selectedNote,
  handleOnClickNote,
}: NotesListProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);
  const { mutate, error, isPending } = useAddUserNote();
  const navigate = useNavigate();
  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  const color1 = chroma("green");
  // const color2 = chroma("red");

  const fetchNoteListText = (note: Note) => {
    const htmlContent = getPlainContent(note);

    const text =
      htmlContent.length > 100
        ? getPlainContent(note).slice(0, 100) + "..."
        : htmlContent;
    return text;
  };

  const handleAddNote = () => {
    if (!isAuthenticated) {
      localStorage.setItem("redirect", "/notes");
      return navigate("/login");
    }
    mutate({
      title: "New note(Draft)",
      content: createDefaultContent(),
      tags: [{ label: "Draft", value: "Draft" }],
      type: -1,
      owner: idOwner,
    });
  };
  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.length > 0) {
      const filteredNotes = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(value.toLowerCase()) ||
          fetchNoteListText(note).toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNotes(filteredNotes);
    } else {
      setFilteredNotes(notes);
    }
  };

  return (
    <Loader isLoading={isPending}>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <NoteListWrapper>
        <NotesSetup
          searchValue={searchValue}
          handleOnChangeSearch={handleOnChangeSearch}
          count={notes.length}
          handleAddNote={handleAddNote}
        />
        <NotesListItemWrapper>
          {filteredNotes.length > 0 &&
            filteredNotes.map((note: Note) => (
              <NoteListItem
                $active={selectedNote?.idnotes === note.idnotes}
                key={note.idnotes}
                onClick={() => handleOnClickNote(note.idnotes)}
              >
                <NotePropertiesWrapper $ifTagsExists={note.tags.length > 0}>
                  <NoteTagsWrapper>
                    {note.tags.length > 0 &&
                      note.tags.map((tag: Tags) => (
                        <NoteTag key={tag.value} $color={color1}>
                          {tag.label}
                        </NoteTag>
                      ))}
                  </NoteTagsWrapper>
                  <NoteDate>
                    {moment.unix(note.updated).format("YYYY-MM-DD")}
                  </NoteDate>
                </NotePropertiesWrapper>
                <NoteTitle>
                  {note.title.length > 30
                    ? note.title.slice(0, 30) + "..."
                    : note.title}
                </NoteTitle>
                <NoteContent
                  dangerouslySetInnerHTML={{
                    __html: fetchNoteListText(note),
                  }}
                ></NoteContent>
              </NoteListItem>
            ))}
        </NotesListItemWrapper>
      </NoteListWrapper>
    </Loader>
  );
};

export default NotesList;

const NoteListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  border-bottom-right-radius: 4px;

  @media only screen and (${DEVICES.md}) {
    padding: 1rem;
    border-right: none;
  }
`;

const NotesListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 62.5vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (${DEVICES.md}) {
    max-height: 40vh;
  }
`;

const NoteListItem = styled.li<{ $active: boolean }>`
  padding: 1rem 2rem;
  list-style: none;
  cursor: pointer;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.secondary : "transparent"};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NotePropertiesWrapper = styled.div<{ $ifTagsExists: boolean | null }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $ifTagsExists }) =>
    $ifTagsExists ? "space-between" : "flex-end"};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
`;

const NoteTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const NoteTag = styled.span<{ $color: chroma.Color }>`
  font-size: ${({ theme }) => theme.font.body.xxs};
  border-radius: 0.2rem;
  color: ${({ $color }) => $color.css()};
  background-color: ${({ $color }) => $color?.alpha(0.3).css()};
  padding: 0.2rem 0.5rem;
  display: inline-block;
`;

const NoteDate = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
  color: ${({ theme }) => theme.colors.text};
  justify-self: end;
`;

const NoteTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.font.body.xl};
  font-weight: 900;
`;

const NoteContent = styled.p`
  margin: 0;
  word-break: break-all;
  font-size: ${({ theme }) => theme.font.body.xs};
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

