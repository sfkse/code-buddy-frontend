import styled from "styled-components";
import { BsFilter } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { AiOutlineTags } from "react-icons/ai";

import Button from "./Button";

type NotesSetupProps = {
  handleAddNote: () => void;
};

const NotesSetup = ({ handleAddNote }: NotesSetupProps) => {
  return (
    <NotesSetupWrapper>
      <NotesOptionsWrapper>
        <NotesCount>42 Notes</NotesCount>
        <NotesOptions>
          <NotesOptionFilterIcon />
          <NotesOptionTagsIcon />
        </NotesOptions>
      </NotesOptionsWrapper>
      <NotesSearchWrapper>
        <NotesSearchIcon />
        <NotesSearchInput placeholder="Search notes..." />
      </NotesSearchWrapper>
      <NotesAddWrapper>
        <NotesAddButton
          onClick={handleAddNote}
          title="ADD NOTE"
          icon={<HiOutlinePlus />}
        />
      </NotesAddWrapper>
    </NotesSetupWrapper>
  );
};

export default NotesSetup;

const NotesSetupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 2rem;
`;

const NotesOptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
`;

const NotesCount = styled.span`
  font-size: 0.8rem;
`;

const NotesOptions = styled.div`
  display: flex;
  flex-direction: row;
`;

const NotesOptionFilterIcon = styled(BsFilter)`
  margin-right: 0.3rem;
  cursor: pointer;
`;

const NotesOptionTagsIcon = styled(AiOutlineTags)`
  cursor: pointer;
`;

const NotesSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NotesSearchIcon = styled.div``;

const NotesSearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 0.8rem;
  padding: 0.5rem;
  width: 100%;
  margin: 1rem 0;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
  }
`;

const NotesAddWrapper = styled.div``;

const NotesAddButton = styled(Button)``;

