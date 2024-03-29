import styled from "styled-components";
import Button from "../../ui/Button";
import MainWrapper from "../../ui/MainWrapper";
import Icons from "../../ui/Icons";
import Filter from "../../ui/Filter";
import NoteCard from "./NoteCard";
import AddNoteForm from "./AddNoteForm";

function NotesContent() {
  const filters = [
    {
      name: "All",
      param: "/notes",
    },
    {
      name: "Shared notes",
      param: "/notes?filter=shared",
    },
    {
      name: "Pinned",
      param: "/notes?filter=pinned",
    },
  ];
  return (
    <ContentWrapper>
      <Button size="sm">
        <Wrapper>
          <Icons.Create />
          ADD NOTE
        </Wrapper>
      </Button>
      <AddNoteForm />
      <FilterAndImageWrapper>
        <Filter filters={filters} style={{ marginTop: "3rem" }} />
        <Icon />
      </FilterAndImageWrapper>
      <CardsWrapper>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </CardsWrapper>
    </ContentWrapper>
  );
}

export default NotesContent;

const ContentWrapper = styled(MainWrapper)`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 0;
`;

const FilterAndImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 3rem;
  position: relative;
`;

const Icon = styled(Icons.NoteImage)`
  position: absolute;
  right: 0;
`;

const CardsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
`;

