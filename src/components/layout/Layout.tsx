import { useState } from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { devices, fonSizes } from "../../styles/Theme";

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/welcome";

  const handleOnToggle = () => {
    setToggle(!toggle);
  };

  return (
    <LayoutWrapper>
      {!isAuthPage && (
        <>
          <Sidebar toggle={toggle} handleToggle={handleOnToggle} />
          <TopBar handleOnToggle={handleOnToggle} />
        </>
      )}
      <ContentWrapper $isAuthPage={isAuthPage}>
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.18fr 1fr;
  grid-template-rows: 1fr 15fr;
  /* min-height: 100vh; */
  @media only screen and (${devices.sm}) {
    font-size: ${fonSizes.body.sm};
  }
  @media only screen and (${devices.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media only screen and (${devices.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const ContentWrapper = styled.div<{ $isAuthPage: boolean }>`
  padding: ${({ $isAuthPage }) => (!$isAuthPage ? "1rem" : 0)};
  padding-bottom: 0;
  @media only screen and (${devices.md}) {
    grid-area: 2 / 1 / 2 / 3;
  }
`;

