import React from "react";
import { styled } from "styled-components";

type LoginFieldsProps = {
  state: object;
  setState: React.Dispatch<React.SetStateAction<object>>;
};

const LoginFields = ({ state, setState }: LoginFieldsProps) => {
  return (
    <>
      <FormInput
        type="email"
        placeholder="Username"
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            userData: {
              ...state.userData,
              email: e.target.value,
            },
          }))
        }
      />
      <FormInput
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            userData: {
              ...state.userData,
              password: e.target.value,
            },
          }))
        }
      />
    </>
  );
};

export default LoginFields;

const FormInput = styled.input`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.darkSecondaryColor};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

