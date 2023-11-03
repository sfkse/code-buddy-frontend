import styled from "styled-components";

import {
  AuthFormState,
  DiscussionFormState,
  EventFormState,
} from "../types/form";

type FormStateTypes = AuthFormState | DiscussionFormState | EventFormState;

type FormFieldsProps = {
  formState: FormStateTypes;
  formFields: Array<{ name: string; type: string; placeholder: string }>;
  handleSetFormState: (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
};

const FormFields = ({
  formState,
  formFields,
  handleSetFormState,
}: FormFieldsProps) => {
  return (
    <>
      {formFields.map((field) => (
        <FormInput
          key={field.name}
          type={field.type}
          value={(formState as any)[field.name]}
          placeholder={field.placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSetFormState(e, field.name)
          }
        />
      ))}
    </>
  );
};

export default FormFields;

const FormInput = styled.input`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.body.base};
  border: ${({ theme }) => theme.colors.secondary} 1px solid;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
  }
`;

