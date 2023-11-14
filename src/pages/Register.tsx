import { useState } from "react";
import { styled } from "styled-components";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import ToastMessage from "../components/ToastMessage";
import FormFields from "../components/FormFields";
import SelectMultipleOptions from "../components/notes/SelectMultipleOptions";

import { useRegisterUser } from "../hooks/user/useRegisterUser";
import { AuthFormState } from "../types/form";
import { registerFormFields } from "../assets/data/form";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState<AuthFormState>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    skills: [],
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const { mutate, isPending } = useRegisterUser();

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

    mutate(formState);
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

  const handleOnChangeSkills = (e: any) => {
    setFormState({ ...formState, skills: e });
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
          formFields={registerFormFields}
          formState={formState}
          handleSetFormState={handleSetFormState}
        />
        <SelectMultipleOptions
          placeholder="Enter your skills..."
          handleOnChangeSelect={handleOnChangeSkills}
          options={[]}
          value={formState.skills}
        />
        <Button
          type="submit"
          disabled={isPending}
          title="REGISTER"
          fullWidth
          variant="primary"
          customStyle={{ padding: "0.5rem 0", fontSize: "1rem" }}
        />
        <LoginText>
          Do you already have an account? Login &nbsp;
          <LoginLink onClick={() => navigate("/login")}>here</LoginLink>
        </LoginText>
      </FormWrapper>

      {errorMessage && <ToastMessage text={errorMessage} />}
    </AuthPageWrapper>
  );
};

export default Register;

const AuthPageWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
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
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

const LoginText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

const LoginLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

