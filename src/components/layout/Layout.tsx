import { useState } from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { DEVICES, FONT_SIZES } from "../../styles/Theme";

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
  @media only screen and (${DEVICES.sm}) {
    font-size: ${FONT_SIZES.body.sm};
  }
  @media only screen and (${DEVICES.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media only screen and (${DEVICES.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const ContentWrapper = styled.div<{ $isAuthPage: boolean }>`
  padding: 0;
  @media only screen and (${DEVICES.md}) {
    grid-area: 2 / 1 / 2 / 3;
  }
`;

