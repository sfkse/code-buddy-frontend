import React from "react";
import { styled } from "styled-components";

type CardProps = {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
};

const Card = ({ children, title, style }: CardProps) => {
  return (
    <CardWrapper style={style}>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  box-shadow: 4px 8px ${({ theme }) => theme.colors.primary};
`;

const CardTitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

