import styled from "styled-components";

import { AuthFormState, DiscussionFormState } from "../types/form";

type FormFieldsProps = {
  formState: AuthFormState | DiscussionFormState;
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
          as={field.type === "textarea" ? "textarea" : "input"}
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

const FormInput = styled.div<{ as: string }>`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  border: ${({ theme }) => theme.colors.secondary} 1px solid;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
  }
  ${({ as }) => as === "textarea" && "resize: vertical; height: 20rem;"}
`;

