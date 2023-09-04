import { useEffect } from "react";
import { keyframes, styled } from "styled-components";

type ToastMessageProps = {
  text: string;
  setErrorMessage?: React.Dispatch<React.SetStateAction<string>>;
};

const ToastMessage = ({ text, setErrorMessage }: ToastMessageProps) => {
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (text && setErrorMessage) {
      timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [setErrorMessage, text]);

  return <ToastMessageWrapper>{text}</ToastMessageWrapper>;
};

export default ToastMessage;

const slideAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  10%{
    
    transform: translateY(0);
  }
  90%{
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const ToastMessageWrapper = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.error};
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.5rem;
  animation: ${slideAnimation} 2.5s ease-in-out forwards;
`;

