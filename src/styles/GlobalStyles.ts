import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-black: #000;
  --color-white: #fff;
  --color-grey-dark: #B5B5B5;
  --color-grey-light: #D9D9D9;
  --color-orange-dark:  #FFC451;
  --color-orange-light: #FFDCA4;
  --font-size-xs: 0.625rem;
  --font-size-sm: 0.8rem;
  --font-size-regular: 1rem;
  --font-size-md: 1.5rem;
  --font-size-lg: 1.8rem;
  --font-size-xl: 2rem;
  --font-size-xxl: 2.4rem;
  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}


body {
  font-family: "Poppins", sans-serif !important;
  overflow-x: hidden;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  /* background-color: var(--color-grey-200);
  color: var(--color-grey-500); */
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  /* outline: 2px solid var(--color-brand-600);
  outline-offset: -1px; */
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
`;

export default GlobalStyles;

