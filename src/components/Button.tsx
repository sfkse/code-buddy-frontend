import { styled } from "styled-components";

import { ButtonProps } from "../types/components";
import { GRADIENT_BUTTON_STYLE } from "../styles/theme";

const Button = ({
  title,
  icon,
  onClick,
  buttonStyle,
  customStyle,
  disabled,
  type,
  variant,
}: ButtonProps) => {
  const style =
    buttonStyle === "gradient" ? GRADIENT_BUTTON_STYLE : customStyle;

  return (
    <ButtonComponent
      type={type || "button"}
      onClick={onClick}
      $variant={variant}
      style={style as React.CSSProperties}
      disabled={disabled}
    >
      <span>{icon}</span> <span>{title}</span>
    </ButtonComponent>
  );
};

export default Button;

const ButtonComponent = styled.button<{ $variant?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.yellow : theme.colors.caution};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.primary : theme.colors.secondary};
  width: 100%;
  border: none;
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 0.5px 0px ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.secondary};
    cursor: not-allowed;
  }
`;

