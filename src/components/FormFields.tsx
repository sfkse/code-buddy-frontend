import styled from "styled-components";

type FormFieldsProps = {
  type: "login" | "register";
  setFormState: React.Dispatch<
    React.SetStateAction<{ email: string; password: string }>
  >;
};

const loginFormFields = [
  { placeholder: "Email", type: "email", name: "email" },
  { placeholder: "Password", type: "password", name: "password" },
];
const registerFormFields = [
  { placeholder: "Email", type: "email", name: "email" },
  { placeholder: "Password", type: "password", name: "password" },
  {
    placeholder: "Confirm Password",
    type: "password",
    name: "confirmPassword",
  },
];

const FormFields = ({ type, setFormState }: FormFieldsProps) => {
  const formFields = type === "login" ? loginFormFields : registerFormFields;
  return (
    <>
      {formFields.map((field) => (
        <FormInput
          key={field.name}
          type={field.type}
          placeholder={field.placeholder}
          onChange={(e) =>
            setFormState((formData) => ({
              ...formData,
              [field.name]: e.target.value,
            }))
          }
        />
      ))}
    </>
  );
};

export default FormFields;

const FormInput = styled.input`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.darkSecondaryColor};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

