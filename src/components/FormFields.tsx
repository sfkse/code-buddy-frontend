import styled from "styled-components";

import { AuthFormState } from "../types/user";
import { loginFormFields, registerFormFields } from "../assets/data/form";

type FormFieldsProps = {
  type?: string;
  formState: AuthFormState;
  handleSetFormState: (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
};

const FormFields = ({
  type,
  formState,
  handleSetFormState,
}: FormFieldsProps) => {
  const formFields = type === "login" ? loginFormFields : registerFormFields;

  return (
    <>
      {formFields.map((field) => (
        <FormInput
          key={field.name}
          type={field.type}
          value={(formState as any)[field.name]}
          placeholder={field.placeholder}
          onChange={(e) => handleSetFormState(e, field.name)}
        />
      ))}
    </>
  );
};

export default FormFields;

const FormInput = styled.input`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

