import { useState } from "react";
import { styled } from "styled-components";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import ToastMessage from "../components/ToastMessage";
import FormFields from "../components/FormFields";

import { useRegisterUser } from "../hooks/user/useRegisterUser";
import { AuthFormState } from "../types/user";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState<AuthFormState>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    skills: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const { mutate, isLoading } = useRegisterUser(
    formState,
    setFormState,
    setErrorMessage
  );

  // REGISTER WITH EMAIL AND PASSWORD
  const handleRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const emptyFields = Object.values(formState).filter(
      (value) => value === ""
    );

    if (emptyFields.length > 0)
      return setErrorMessage("Please fill all the fields");

    if (formState.password !== formState.confirmPassword)
      return setErrorMessage("Passwords do not match");

    mutate();
  };
  // LOGIN WITH GITHUB
  const handleGithubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  const handleSetFormState = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormState((formData) => ({
      ...formData,
      [name]: e.target.value,
    }));
  };

  const handleSetResetMessage = () => {
    setErrorMessage("");
  };

  return (
    <AuthPageWrapper>
      <FormWrapper onSubmit={handleRegister}>
        <Button
          title="Login With Github"
          icon={<BsGithub />}
          buttonStyle="gradient"
          onClick={handleGithubLogin}
        />
        <Hr>- OR -</Hr>
        <FormFields
          formState={formState}
          handleSetFormState={handleSetFormState}
        />
        <Button type="submit" disabled={isLoading} title="REGISTER" />
        <LoginText>
          Do you already have an account? Login &nbsp;
          <LoginLink onClick={() => navigate("/login")}>here</LoginLink>
        </LoginText>
      </FormWrapper>

      {errorMessage && (
        <ToastMessage
          text={errorMessage}
          handleSetResetMessage={handleSetResetMessage}
        />
      )}
    </AuthPageWrapper>
  );
};

export default Register;

const AuthPageWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const FormWrapper = styled.form`
  display: flex;
  width: 30%;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

const Hr = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

const LoginText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

const LoginLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

