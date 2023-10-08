import styled from "styled-components";
import { Outlet } from "react-router-dom";

import DiscussionsMenu from "./DiscussionsMenu";

const Discussions = () => {
  return (
    <DiscussionsWrapper>
      <DiscussionsMenu />
      <DiscussionsContentWrapper>
        <Outlet />
      </DiscussionsContentWrapper>
    </DiscussionsWrapper>
  );
};

export default Discussions;

const DiscussionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 0.5rem;
`;

const DiscussionsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 2rem 0;
`;

