import styled from "styled-components";
import { BsFillTrash3Fill, BsPrinter, BsShare } from "react-icons/bs";
import { FiSave } from "react-icons/fi";
import { DEVICES } from "../../styles/theme";

type NoteContentToolbarProps = {
  handleDeleteNote: () => void;
};

const NoteContentToolbar = ({ handleDeleteNote }: NoteContentToolbarProps) => {
  return (
    <>
      <NoteToolbarWrapper>
        <NoteToolbarConfigOptions>
          <NoteToolbarConfigOptionSave />
          <NoteToolbarConfigOptionShare />
          <NoteToolbarConfigOptionPrint />
          <NoteToolbarConfigOptionDelete onClick={handleDeleteNote} />
        </NoteToolbarConfigOptions>
      </NoteToolbarWrapper>
    </>
  );
};

export default NoteContentToolbar;

const NoteToolbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryExtraLight};

  @media only screen and (${DEVICES.md}) {
    font-size: ${({ theme }) => theme.font.body.base};
  }
`;

const NoteToolbarConfigOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  margin-bottom: 1rem;
`;

const NoteToolbarConfigOptionSave = styled(FiSave)`
  cursor: pointer;
`;

const NoteToolbarConfigOptionShare = styled(BsShare)`
  cursor: pointer;
`;

const NoteToolbarConfigOptionPrint = styled(BsPrinter)`
  cursor: pointer;
`;

const NoteToolbarConfigOptionDelete = styled(BsFillTrash3Fill)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
`;

