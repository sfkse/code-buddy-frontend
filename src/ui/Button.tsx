import styled, { css } from "styled-components";

const Button = styled.button<{ size?: string; variant?: string }>`
  ${({ size }) =>
    size === "sm" &&
    css`
      padding: 0.2rem 1rem;
    `}
  ${({ size }) =>
    size === "md" &&
    css`
      padding: 0.5rem 1.2rem;
    `}
  background-color: ${({ variant }) =>
    variant === "primary" ? "var(--color-orange-dark)" : "var(--color-white)"};
  color: var(--color-black);
  border: 1px solid var(--color-black);
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 4px 2px 0px var(--color-black);
  &:hover {
    background-color: var(--color-orange-light);
  }
`;

Button.defaultProps = {
  size: "md",
  variant: "primary",
};

export default Button;

