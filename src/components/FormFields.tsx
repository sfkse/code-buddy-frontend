import styled from "styled-components";

type FormFieldsProps = {
  type?: string;
  formState: {
    email: string;
    password: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    skills?: string;
  };
  setFormState: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirmPassword?: string;
    }>
  >;
};

const FormFields = ({ type, formState, setFormState }: FormFieldsProps) => {
  const loginFormFields = [
    {
      placeholder: "Email",
      type: "email",
      name: "email",
      value: formState.email,
    },
    {
      placeholder: "Password",
      type: "password",
      name: "password",
      value: formState.password,
    },
  ];
  const registerFormFields = [
    {
      placeholder: "Email*",
      type: "email",
      name: "email",
      value: formState.email,
    },
    {
      placeholder: "Fistname*",
      type: "text",
      name: "firstName",
      value: formState.firstName,
    },
    {
      placeholder: "Lastname*",
      type: "text",
      name: "lastName",
      value: formState.lastName,
    },
    {
      placeholder: "Location*",
      type: "text",
      name: "location",
      value: formState.location,
    },
    {
      placeholder: "Skills*",
      type: "text",
      name: "skills",
      value: formState.skills,
    },
    {
      placeholder: "Password*",
      type: "password",
      name: "password",
      value: formState.password,
    },
    {
      placeholder: "Confirm Password*",
      type: "password",
      name: "confirmPassword",
    },
  ];
  const formFields = type === "login" ? loginFormFields : registerFormFields;
  return (
    <>
      {formFields.map((field) => (
        <FormInput
          key={field.name}
          type={field.type}
          value={field.value}
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

