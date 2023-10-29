import { useEffect, useRef, useState } from "react";
import { keyframes, styled } from "styled-components";

type ToastMessageProps = {
  text: string;
  setResetErrorMessage?: React.Dispatch<React.SetStateAction<string>>;
};

const ToastMessage = ({ text, setResetErrorMessage }: ToastMessageProps) => {
  const [isVisibile, setIsVisible] = useState(text ? true : false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    clearTimeout(timerRef.current);
    if (text) {
      setIsVisible(true);
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        setResetErrorMessage && setResetErrorMessage("");
      }, 2000);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [text, setResetErrorMessage]);

  return (
    <ToastMessageWrapper $isVisible={isVisibile}>{text}</ToastMessageWrapper>
  );
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

const ToastMessageWrapper = styled.p<{ $isVisible?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.font.body.sm};
  font-weight: 700;
  padding: 0.5rem;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  animation: ${slideAnimation} 2.5s ease-in-out forwards;
`;

