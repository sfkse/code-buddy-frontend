import { styled } from "styled-components";
import Tooltip from "@mui/material/Tooltip";

import { ButtonProps } from "../types/components";
import { GRADIENT_BUTTON_STYLE } from "../styles/theme";

const Button = ({
  title,
  icon,
  onClick,
  buttonStyle,
  customStyle,
  iconStyle,
  disabled,
  type,
  fullWidth,
  variant,
}: ButtonProps) => {
  const style =
    buttonStyle === "gradient" ? GRADIENT_BUTTON_STYLE : customStyle;

  const button = (
    <ButtonComponent
      type={type || "button"}
      onClick={onClick}
      style={style as React.CSSProperties}
      disabled={disabled}
      $variant={variant}
      $fullWidth={fullWidth}
    >
      {icon && <Icon style={iconStyle}>{icon}</Icon>} <span>{title}</span>
    </ButtonComponent>
  );

  return (
    <>
      {disabled ? (
        <Tooltip
          style={{ width: "100%" }}
          title="You must be logged in to perform this action"
        >
          <span>{button}</span>
        </Tooltip>
      ) : (
        button
      )}
    </>
  );
};

export default Button;

const ButtonComponent = styled.button<{
  $variant?: string;
  $fullWidth?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.yellow : theme.colors.caution};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.primary : theme.colors.secondary};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};
  border: none;
  text-align: center;
  padding: 0.2rem 1rem;
  font-size: ${({ theme }) => theme.font.body.xs};
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

const Icon = styled.span`
  font-size: ${({ theme }) => theme.font.body.base};
  padding-top: 5px;
  margin-right: 0.5rem;
`;

