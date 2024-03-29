import { ClipLoader } from "react-spinners";
import styled from "styled-components";

type LoaderProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

function Loader({ children, isLoading }: LoaderProps) {
  return (
    <>
      {children}

      {isLoading && (
        <LoaderIcon
          color="var(--color-orange-dark)"
          loading={true}
          // cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
        />
      )}
    </>
  );
}

export default Loader;

const LoaderIcon = styled(ClipLoader)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

