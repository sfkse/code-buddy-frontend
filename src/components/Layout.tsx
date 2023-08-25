import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";
  return (
    <LayoutWrapper>
      {!isAuthPage && (
        <>
          <Sidebar />
          <TopBar />
        </>
      )}
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 1fr;
  grid-template-rows: 0.03fr 0.97fr;
  /* gap: 5px 5px; */
  grid-auto-flow: row;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  /* background-color: ${(props) => props.theme.colors.secondaryColor}; */
  padding: 1rem;
`;

