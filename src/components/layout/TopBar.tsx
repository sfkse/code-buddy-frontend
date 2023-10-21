import { styled } from "styled-components";
import { CgMenuLeftAlt } from "react-icons/cg";

import Actions from "../Actions";
import UserMenu from "../UserMenu";

import { DEVICES } from "../../styles/theme";

type TopBarProps = {
  handleOnToggle: (toggle: boolean) => void;
};

const TopBar = ({ handleOnToggle }: TopBarProps) => {
  return (
    <TopBarWrapper>
      <SidebarToggle>
        <ToggleHamburger onClick={() => handleOnToggle(true)}>
          <CgMenuLeftAlt />
        </ToggleHamburger>
      </SidebarToggle>
      <ActionsWrapper>
        <Actions />
        <UserMenu />
      </ActionsWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;

const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.3rem 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  @media only screen and (${DEVICES.md}) {
    justify-content: space-between;
    width: 100vw;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SidebarToggle = styled.div`
  display: none;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  @media only screen and (${DEVICES.md}) {
    display: block;
  }
`;

const ToggleHamburger = styled.span`
  display: none;
  @media only screen and (${DEVICES.md}) {
    display: flex;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.heading.base};
  }
`;

