import { styled } from "styled-components";

import { ButtonProps } from "../types/components";
import { gradientButtonStyle } from "../styles/Theme";

const Button = ({
  title,
  icon,
  onClick,
  buttonStyle,
  disabled,
  type,
}: ButtonProps) => {
  const style =
    buttonStyle === "gradient"
      ? gradientButtonStyle
      : { padding: "0.7rem 0", fontSize: "1.3rem" };

  return (
    <ButtonComponent
      type={type || "button"}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {icon} {title}
    </ButtonComponent>
  );
};

export default Button;

const ButtonComponent = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 100%;
  border: none;
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 0.5px 0px ${({ theme }) => theme.colors.darkPrimaryColor};
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPrimaryColor};
    color: ${({ theme }) => theme.colors.white};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkSecondaryColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
    cursor: not-allowed;
  }
`;

