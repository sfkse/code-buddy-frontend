import { useNavigate } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";
import styled from "styled-components";

import Button from "../components/Button";

const Error = () => {
  // const error = useRouteError();
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <ErrorPageWrapper>
      <ErrorPageTitle>404</ErrorPageTitle>
      <ErrorPageMessage>Not Found</ErrorPageMessage>
      <ErrorPageButton
        onClick={handleReturnHome}
        title="RETURN HOME"
        fullWidth
        icon={<ReturnIcon />}
      />
    </ErrorPageWrapper>
  );
};

export default Error;

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  overflow: hidden;
`;

const ErrorPageTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
`;

const ErrorPageMessage = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ErrorPageButton = styled(Button)``;

const ReturnIcon = styled(IoReturnDownBackSharp)`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  padding-top: 4px;
`;

