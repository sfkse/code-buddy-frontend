import styled from "styled-components";
import { BsFilter } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { AiOutlineTags } from "react-icons/ai";

import Button from "../Button";
import SearchInput from "../SearchInput";

import { DEVICES } from "../../styles/theme";

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
        <SearchInput placeholder="Search notes..." />
      </NotesSearchWrapper>
      <NotesAddWrapper>
        <NotesAddButton
          onClick={handleAddNote}
          variant="primary"
          title="ADD NOTE"
          icon={<HiOutlinePlus />}
          fullWidth
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
  @media only screen and (${DEVICES.md}) {
    padding: 1rem 0;
  }
`;

const NotesOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
`;

const NotesCount = styled.span`
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const NotesOptions = styled.div`
  display: flex;
  flex-direction: row;
`;

const NotesOptionFilterIcon = styled(BsFilter)`
  margin-right: 0.3rem;
  cursor: pointer;

  @media only screen and (${DEVICES.md}) {
    font-size: ${({ theme }) => theme.font.body.base};
  }
`;

const NotesOptionTagsIcon = styled(AiOutlineTags)`
  cursor: pointer;

  @media only screen and (${DEVICES.md}) {
    font-size: ${({ theme }) => theme.font.body.base};
  }
`;

const NotesSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NotesSearchIcon = styled.div``;

const NotesAddWrapper = styled.div``;

const NotesAddButton = styled(Button)``;

