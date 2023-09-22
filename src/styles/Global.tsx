import { createGlobalStyle, css } from "styled-components";

// const fontWeights = {
//   hairline: 100,
//   thin: 200,
//   light: 300,
//   normal: 400,
//   medium: 500,
//   semibold: 600,
//   bold: 700,
//   extrabold: 800,
//   black: 900,
// };

// const lineHeights = {
//   normal: "normal",
//   none: 1,
//   shorter: 1.25,
//   short: 1.375,
//   base: 1.5,
//   tall: 1.625,
//   taller: "2",
// };

export const menuItemBorder = css`
  border-left: 4px solid;
  border-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.yellow},
      rgba(0, 0, 0)
    )
    8%;
`;

export const GlobalStyles = createGlobalStyle`
  *:where(
      :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)
    ) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
  }

  /* Reapply the pointer cursor for anchor tags */
  a,
  button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol,
  ul,
  menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  input,
  textarea {
    -webkit-user-select: auto;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* preformatted text - use only for this feature */
  :where(pre) {
    all: revert;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* remove default dot (•) sign */
  ::marker {
    content: initial;
  }

  /* fix the feature of 'hidden' attribute.
    display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
    - fix for the content editable attribute will work properly.
    - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element */
  :where([contenteditable]:not([contenteditable="false"])) {
    user-select: auto;
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  /* Revert Modal native behavior */
  :where(dialog:modal) {
    all: revert;
  }

  /* Leaflet css */
  .leaflet-popup-content-wrapper {
    background: none;
    box-shadow: none;
  }

  .leaflet-popup-close-button {
    display: none;
  }`;

