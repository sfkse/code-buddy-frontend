import { CSSProperties } from "react";
import { BounceLoader } from "react-spinners";
import styled from "styled-components";

type LoaderProps = {
  children?: React.ReactNode;
  isLoading?: boolean;
};
const cssOverride: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2000,
};
const Loader = ({ children, isLoading }: LoaderProps) => {
  return (
    <LoaderWrapper $isLoading={isLoading}>
      {isLoading && (
        <BounceLoader
          color="#36D7B7"
          cssOverride={cssOverride}
          loading={isLoading}
        />
      )}
      {children}
    </LoaderWrapper>
  );
};

export default Loader;

//When isLoading through, mouse events are not triggered.
const LoaderWrapper = styled.div<{ $isLoading?: boolean }>`
  pointer-events: ${({ $isLoading }) => ($isLoading ? "none" : "auto")};
`;

