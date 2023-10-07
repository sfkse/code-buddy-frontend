import {
  BsCodeSlash,
  BsListOl,
  BsListUl,
  BsPaperclip,
  BsTextCenter,
  BsTextLeft,
  BsTextRight,
  BsTypeBold,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
} from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import styled from "styled-components";

type EditorStyleOptionsProps = {
  handleOnStyle: (style: string) => void;
};

const EditorStyleOptions = ({ handleOnStyle }: EditorStyleOptionsProps) => {
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
    <NoteToolbarStyleOptions>
      {styles.map(({ Icon, style }) => (
        <button type="button" key={style} onClick={() => handleOnStyle(style)}>
          {Icon}
        </button>
      ))}
      <AttachFiles />
    </NoteToolbarStyleOptions>
  );
};

export default EditorStyleOptions;

const NoteToolbarStyleOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  margin-bottom: 1rem;
`;

const AttachFiles = styled(BsPaperclip)`
  cursor: pointer;
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

