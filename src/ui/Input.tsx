import React from "react";
import Icons from "./Icons";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--color-grey-light);
  border-radius: 4px;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: var(--font-size-xs);
  }
`;

interface InputProps {
  type?: "text";
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type = "text", placeholder, value, onChange }: InputProps) {
  return (
    <InputWrapper>
      <Icons.Search fillcolor="var(--color-grey-dark)" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;

