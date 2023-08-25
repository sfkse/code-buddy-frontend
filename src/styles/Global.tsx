import { css } from "styled-components";

export const menuItemBorder = css`
  border-left: 4px solid;
  border-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.yellow},
      rgba(0, 0, 0)
    )
    8%;
`;

