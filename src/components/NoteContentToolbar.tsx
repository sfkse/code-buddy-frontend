import {
  BsCodeSlash,
  BsFillTrash3Fill,
  BsListOl,
  BsListUl,
  BsPaperclip,
  BsPrinter,
  BsShare,
  BsTextCenter,
  BsTextLeft,
  BsTextRight,
  BsTypeBold,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
} from "react-icons/bs";
import { FiAlignJustify, FiSave } from "react-icons/fi";
import { AiTwotoneTags } from "react-icons/ai";
import styled from "styled-components";

type NoteContentToolbarProps = {
  handleOnStyle: (style: string) => void;
  handleOpenTags: () => void;
  handleDeleteNote: () => void;
};

const NoteContentToolbar = ({
  handleOnStyle,
  handleOpenTags,
  handleDeleteNote,
}: NoteContentToolbarProps) => {
  const styles = [
    { Icon: <Bold />, style: "BOLD" },
    { Icon: <Italic />, style: "ITALIC" },
    { Icon: <Underlined />, style: "UNDERLINE" },
    { Icon: <StrikeThrough />, style: "STRIKETHROUGH" },
    { Icon: <Code />, style: "CODE" },
    { Icon: <OrderedList />, style: "ordered-list-item" },
    { Icon: <UnorderedList />, style: "unordered-list-item" },
    { Icon: <TextAlignLeft />, style: "LEFT" },
    { Icon: <TextAlignCenter />, style: "CENTER" },
    { Icon: <TextAlignRight />, style: "RIGHT" },
    { Icon: <TextAlignJustify />, style: "JUSTIFY" },
  ];

  return (
    <NoteToolbarWrapper>
      <NoteToolbarConfigOptions>
        <NoteToolbarConfigOptionTags onClick={handleOpenTags} />
        <NoteToolbarConfigOptionSave />
        <NoteToolbarConfigOptionShare />
        <NoteToolbarConfigOptionPrint />
        <NoteToolbarConfigOptionDelete onClick={handleDeleteNote} />
      </NoteToolbarConfigOptions>
      <NoteToolbarStyleOptions>
        {styles.map(({ Icon, style }) => (
          <button key={style} onClick={() => handleOnStyle(style)}>
            {Icon}
          </button>
        ))}
        <AttachFiles />
      </NoteToolbarStyleOptions>
    </NoteToolbarWrapper>
  );
};

export default NoteContentToolbar;

const NoteToolbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
`;

const NoteToolbarStyleOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  margin-bottom: 1rem;
`;

const NoteToolbarConfigOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  margin-bottom: 1rem;
`;

const NoteToolbarConfigOptionTags = styled(AiTwotoneTags)`
  cursor: pointer;
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

const Bold = styled(BsTypeBold)`
  cursor: pointer;
`;

const Italic = styled(BsTypeItalic)`
  cursor: pointer;
`;

const Underlined = styled(BsTypeUnderline)`
  cursor: pointer;
`;

const StrikeThrough = styled(BsTypeStrikethrough)`
  cursor: pointer;
  text-decoration: line-through;
`;

const Code = styled(BsCodeSlash)`
  cursor: pointer;
`;

const OrderedList = styled(BsListOl)`
  cursor: pointer;
`;

const UnorderedList = styled(BsListUl)`
  cursor: pointer;
`;

const TextAlignLeft = styled(BsTextLeft)`
  cursor: pointer;
`;

const TextAlignCenter = styled(BsTextCenter)`
  cursor: pointer;
`;

const TextAlignRight = styled(BsTextRight)`
  cursor: pointer;
`;

const TextAlignJustify = styled(FiAlignJustify)`
  cursor: pointer;
`;

const AttachFiles = styled(BsPaperclip)`
  cursor: pointer;
`;

// const NoteContentToolbarWrapper = styled.div`

