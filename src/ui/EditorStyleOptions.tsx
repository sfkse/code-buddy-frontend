import React from "react";
import styled from "styled-components";
type EditorStyleOptionsProps = {
  handleOnStyle: (style: string) => void;
};

function EditorStyleOptions({ handleOnStyle }: EditorStyleOptionsProps) {
  const styles = [
    { Icon: "B", style: "BOLD" },
    // { Icon: <Italic />, style: "ITALIC" },
    // { Icon: <Underlined />, style: "UNDERLINE" },
    // { Icon: <StrikeThrough />, style: "STRIKETHROUGH" },
    // { Icon: <Code />, style: "CODE" },
    // { Icon: <OrderedList />, style: "ordered-list-item" },
    // { Icon: <UnorderedList />, style: "unordered-list-item" },
    // { Icon: <TextAlignLeft />, style: "LEFT" },
    // { Icon: <TextAlignCenter />, style: "CENTER" },
    // { Icon: <TextAlignRight />, style: "RIGHT" },
    // { Icon: <TextAlignJustify />, style: "JUSTIFY" },
  ];

  return (
    <NoteToolbarStyleOptions>
      {styles.map(({ Icon, style }) => (
        <button type="button" key={style} onClick={() => handleOnStyle(style)}>
          {Icon}
        </button>
      ))}
      {/* <AttachFiles /> */}
    </NoteToolbarStyleOptions>
  );
}

export default EditorStyleOptions;

const NoteToolbarStyleOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
`;

