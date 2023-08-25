import { styled } from "styled-components";

import { ButtonProps } from "../types/components";

const Button = ({ title, icon, onClick, style, disabled }: ButtonProps) => {
  return (
    <ButtonComponent
      type="button"
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
  background-color: ${(props) => props.theme.colors.yellow};
  width: 100%;
  border: none;
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 0.5px 0px
    ${(props) => props.theme.colors.darkPrimaryColor};
  &:hover {
    background-color: ${(props) => props.theme.colors.darkPrimaryColor};
    color: ${(props) => props.theme.colors.white};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.darkSecondaryColor};
    color: ${(props) => props.theme.colors.secondaryColor};
    cursor: not-allowed;
  }
`;

