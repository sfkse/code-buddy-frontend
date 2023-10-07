import { css } from "styled-components";

export const theme = {
  colors: {
    //Text
    primary: "#191716",
    primaryLight: "#191716c0",
    primaryExtraLight: "#19171670",
    secondary: "#e0e2db",
    yellow: "#e6af2e",
    white: "white",
    danger: "#ED2121",
    caution: "#F73423",
    //Box
    boxShadow:
      "0px 2px 2px rgba(21, 21, 23, 0.04), 0px 0px 2px rgba(21, 21, 23, 0.04);",
  },
  font: {
    fontInter: "Inter",
    smallFont: ".8rem",
    extraSmallFont: ".65rem",
  },
  layout: {
    padding: "2rem 1rem;",
  },
};

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const DEVICES = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};

export const FONT_SIZES = {
  body: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  heading: {
    xs: "1rem",
    sm: "1.25rem",
    base: "1.5rem",
    lg: "1.875rem",
    xl: "2.25rem",
    "2xl": "3rem",
    "3xl": "3.75rem",
    "4xl": "4.5rem",
    "5xl": "6rem",
    "6xl": "8rem",
  },
};

export const GRADIENT_BUTTON_STYLE = {
  width: "200px",
  alignSelf: "center",
  color: "white",
  display: "flex",
  gap: "5px",
  alignItems: "center",
  justifyContent: "space-evenly",
  background:
    "radial-gradient(circle at 100% 100%, #000 0, #000 1px, transparent 1px) 0% 0%/2px 2px no-repeat,radial-gradient(circle at 0 100%, #000 0, #000 1px, transparent 1px) 100% 0%/2px 2px no-repeat,radial-gradient(circle at 100% 0, #000 0, #000 1px, transparent 1px) 0% 100%/2px 2px no-repeat,radial-gradient(circle at 0 0, #000 0, #000 1px, transparent 1px) 100% 100%/2px 2px no-repeat,linear-gradient(#000, #000) 50% 50%/calc(100% - 4px) calc(100% - 6px) no-repeat,linear-gradient(#000, #000) 50% 50%/calc(100% - 6px) calc(100% - 4px) no-repeat,linear-gradient(90deg, transparent 0%, #ffd100 51%)",
  borderRadius: "2px",
  padding: "0.7rem 0.6rem",
  boxSizing: "border-box",
  fontSize: ".95rem",
  lineHeight: "1.5",
  fonwWeight: "300",
  letterSpacing: ".025rem",
};

export const EDITOR_STYLE_MAP = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 14,
    padding: 2,
    display: "inline-block",
    fonwWeight: 500,
  },
};

export const MENU_ITEM_BORDER = css`
  border-left: 4px solid;
  border-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.yellow},
      rgba(0, 0, 0)
    )
    8%;
`;

