import styled from "styled-components";

const Wrapper = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: flex-start;
  gap: 1rem;
  margin: 4rem;
`;

interface RowProps {
  children: React.ReactNode;
  direction: string;
}

function Row({ children, direction }: RowProps) {
  return <Wrapper direction={direction}>{children}</Wrapper>;
}

Row.defaultProps = {
  direction: "column",
};

export default Row;

