import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Content = () => {
  return (
    <ContentWrapper>
      <Outlet />
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  /* background-color: ${({ theme }) => theme.colors.secondary}; */
  padding: 1rem;
`;

