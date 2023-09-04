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
  grid-template-rows: 0.03fr 1fr;
  /* gap: 5px 5px; */
  grid-auto-flow: row;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding: 1rem;
`;

