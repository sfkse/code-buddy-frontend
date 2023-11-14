import styled from "styled-components";
import { Outlet } from "react-router-dom";

import PageMenu from "../components/discussions/PageMenu";
import { discussionsMenuLinks } from "../assets/data/menu";
import { DEVICES } from "../styles/theme";

const Discussions = () => {
  return (
    <DiscussionsWrapper>
      <PageMenu
        hasSearch
        pageMenuLinks={discussionsMenuLinks}
        searchPlaceholder="Search for discussions"
      />
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
  position: relative;

  @media only screen and (${DEVICES.md}) {
    grid-template-columns: 1fr;
  }
`;

const DiscussionsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 2rem 0;

  @media only screen and (${DEVICES.sm}) {
    padding: 2rem 0;
  }
`;

