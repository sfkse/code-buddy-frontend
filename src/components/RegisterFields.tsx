import { styled } from "styled-components";

type RegisterFieldsProps = {
  setUserData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
};
const RegisterFields = ({ setUserData }: RegisterFieldsProps) => {
  return (
    <>
      <FormInput
        type="email"
        placeholder="Username"
        onChange={(e) =>
          setUserData((userData) => ({
            ...userData,
            email: e.target.value,
          }))
        }
      />
      <FormInput
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setUserData((userData) => ({
            ...userData,
            password: e.target.value,
          }))
        }
      />
    </>
  );
};

export default RegisterFields;

const FormInput = styled.input`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.body.base};
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

