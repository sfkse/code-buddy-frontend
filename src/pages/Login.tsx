import { FormEvent, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

import Button from "../components/Button";
import ToastMessage from "../components/ToastMessage";
import FormFields from "../components/FormFields";

import { useLoginUser } from "../hooks/user/useLoginUser";
import { AuthFormState } from "../types/user";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState<AuthFormState>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // AUTHENTICATION
  const { mutate, isLoading } = useLoginUser(
    formState,
    setFormState,
    setErrorMessage
  );

  // LOGIN WITH EMAIL AND PASSWORD
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (formState.email === "" || formState.password === "") {
      return setErrorMessage("Please fill all the fields");
    }
    mutate();
  };

  // LOGIN WITH GITHUB
  const handleGithubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  return (
    <AuthPageWrapper>
      <FormWrapper onSubmit={handleLogin}>
        <Button
          title="Login With Github"
          icon={<BsGithub />}
          buttonStyle="gradient"
          onClick={handleGithubLogin}
        />
        <Hr>- OR -</Hr>
        <FormFields
          type="login"
          formState={formState}
          setFormState={setFormState}
        />
        <Button type="submit" disabled={isLoading} title="LOGIN" />
        <RegisterText>
          Don't you have an account? Create{" "}
          <RegisterLink onClick={() => navigate("/register")}>
            here
          </RegisterLink>
        </RegisterText>
      </FormWrapper>

      {errorMessage ? (
        <ToastMessage text={errorMessage} setErrorMessage={setErrorMessage} />
      ) : null}
    </AuthPageWrapper>
  );
};

export default Login;

const AuthPageWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkPrimaryColor};
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
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

const RegisterText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

const RegisterLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

