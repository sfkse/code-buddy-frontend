import React from "react";
import styled from "styled-components";

// TODO: Decide if the title and description should be passed as props or children

interface CardProps {
  children: React.ReactNode;
  isforslider?: boolean;
  props?: any;
}

function Card({ children, isforslider, ...props }: CardProps) {
  return (
    <CardItem isforslider={isforslider} {...props}>
      {children}
    </CardItem>
  );
}

function CardImage({ source }: { source: string }) {
  return <Image src={source} />;
}

function CardBody({ children }: CardProps) {
  return <Body>{children}</Body>;
}

function CardFooter({ children }: CardProps) {
  return <Footer>{children}</Footer>;
}

Card.Image = CardImage;
Card.Body = CardBody;
Card.Footer = CardFooter;

Card.defaultProps = {
  isforslider: false,
};

export default Card;

const CardItem = styled.div<{ isforslider?: boolean }>`
  border-radius: 6px;
  margin-bottom: 2rem;
  border: 1px solid var(--color-grey-light);
  margin: ${({ isforslider }) => isforslider && "0 1rem"};
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Body = styled.div`
  padding: 1rem 1.5rem;
`;

const Footer = styled.div`
  padding: 0.8rem 1.5rem;
  border-top: 1px solid var(--color-grey-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

