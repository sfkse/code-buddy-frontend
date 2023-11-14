import { Outlet } from "react-router-dom";
import styled from "styled-components";

import PageMenu from "../components/discussions/PageMenu";

import { settingsMenuLinks } from "../assets/data/menu";

const Settings = () => {
  return (
    <SettingsWrapper>
      <PageMenu pageMenuLinks={settingsMenuLinks} />
      <SettingsContentWrapper>
        <Outlet />
      </SettingsContentWrapper>
    </SettingsWrapper>
  );
};

export default Settings;

const SettingsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 0.5rem;
  padding-top: 2rem;
`;

const SettingsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 2rem 1rem;
`;

