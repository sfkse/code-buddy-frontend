import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { devices } from "../../styles/Theme";
import { useState } from "react";

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";

  const handleOnToggle = () => {
    setToggle(!toggle);
  };

  return (
    <LayoutWrapper>
      {!isAuthPage && (
        <>
          <Sidebar toggle={toggle} handleToggle={handleOnToggle} />
          <TopBar handleOnToggle={handleOnToggle} />
          <Footer />
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
  /* grid-auto-flow: row; */
  min-height: 100vh;
  @media only screen and ${devices.md} {
    grid-template-columns: 1fr;
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  @media only screen and ${devices.md} {
    grid-area: 2 / 1 / 2 / 3;
  }
`;

