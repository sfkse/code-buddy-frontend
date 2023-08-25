import { keyframes, styled } from "styled-components";

type ToastMessageProps = {
  text: string;
};

const ToastMessage = ({ text }: ToastMessageProps) => {
  return <ToastMessageWrapper>{text}</ToastMessageWrapper>;
};

export default ToastMessage;

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
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
  animation: ${slideIn} 0.3s ease-out forwards;
`;

