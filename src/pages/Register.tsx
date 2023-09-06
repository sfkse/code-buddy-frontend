import { useState } from "react";
import { styled } from "styled-components";
import { BsGithub } from "react-icons/bs";

import Button from "../components/Button";
import ToastMessage from "../components/ToastMessage";

import { useLoginUser } from "../hooks/user/useLoginUser";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "../hooks/user/useRegisterUser";

const githubButtonStyle = {
  width: "200px",
  alignSelf: "center",
  color: "white",
  display: "flex",
  gap: "5px",
  alignItems: "center",
  justifyContent: "space-evenly",
  background:
    "radial-gradient(circle at 100% 100%, #000 0, #000 1px, transparent 1px) 0% 0%/2px 2px no-repeat,radial-gradient(circle at 0 100%, #000 0, #000 1px, transparent 1px) 100% 0%/2px 2px no-repeat,radial-gradient(circle at 100% 0, #000 0, #000 1px, transparent 1px) 0% 100%/2px 2px no-repeat,radial-gradient(circle at 0 0, #000 0, #000 1px, transparent 1px) 100% 100%/2px 2px no-repeat,linear-gradient(#000, #000) 50% 50%/calc(100% - 4px) calc(100% - 6px) no-repeat,linear-gradient(#000, #000) 50% 50%/calc(100% - 6px) calc(100% - 4px) no-repeat,linear-gradient(90deg, transparent 0%, #ffd100 51%)",
  borderRadius: "2px",
  padding: "0.7rem 0.6rem",
  boxSizing: "border-box",
  fontSize: ".95rem",
  lineHeight: "1.5",
  fonwWeight: "300",
  letterSpacing: ".025rem",
};

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { mutate, isLoading } = useRegisterUser(
    userData.email,
    userData.password,
    userData.confirmPassword,
    setErrorMessage
  );
  const navigate = useNavigate();

  const handleRegister = () => {
    if (userData.email === "" || userData.password === "") {
      return setErrorMessage("Please fill all the fields");
    }
    mutate();
  };

  return (
    <AuthPageWrapper>
      <FormWrapper>
        <Button
          title="Login With Github"
          icon={<BsGithub />}
          style={githubButtonStyle}
        />
        <Hr>- OR -</Hr>
        <FormInput
          type="email"
          placeholder="Email*"
          onChange={(e) =>
            setUserData((userData) => ({
              ...userData,
              email: e.target.value,
            }))
          }
        />
        <FormInput
          type="password"
          placeholder="Password*"
          onChange={(e) =>
            setUserData((userData) => ({
              ...userData,
              password: e.target.value,
            }))
          }
        />
        <FormInput
          type="password"
          placeholder="Confirm Password*"
          onChange={(e) =>
            setUserData((userData) => ({
              ...userData,
              password: e.target.value,
            }))
          }
        />
        <Button
          onClick={handleRegister}
          disabled={isLoading}
          title="REGISTER"
          style={{ padding: "0.7rem 0", fontSize: "1.3rem" }}
        />
        <LoginText>
          Do you already have an account? Login{" "}
          <LoginLink onClick={() => navigate("/login")}>here</LoginLink>
        </LoginText>
      </FormWrapper>

      {errorMessage ? (
        <ToastMessage text={errorMessage} setErrorMessage={setErrorMessage} />
      ) : null}
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
  background-color: ${({ theme }) => theme.colors.darkPrimaryColor};
`;

const FormWrapper = styled.div`
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

const FormInput = styled.input`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.darkSecondaryColor};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

const LoginText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

const LoginLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
