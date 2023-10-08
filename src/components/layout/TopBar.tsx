import { styled } from "styled-components";
import { CgMenuLeftAlt } from "react-icons/cg";
import Actions from "../Actions";
import UserMenu from "../UserMenu";
import { DEVICES } from "../../styles/theme";
import Button from "../Button";
import { BiMailSend } from "react-icons/bi";

type TopBarProps = {
  handleOnToggle: () => void;
};

const TopBar = ({ handleOnToggle }: TopBarProps) => {
  return (
    <TopBarWrapper>
      <SidebarToggle>
        <ToggleHamburger onClick={handleOnToggle}>
          <CgMenuLeftAlt />
        </ToggleHamburger>
      </SidebarToggle>
      <InviteFriendsLink
        variant="secondary"
        title="Invite Friends"
        icon={<BiMailSend />}
      />
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
  max-height: 4rem;
  grid-area: 1 / 2 / 2 / -1;
  padding: 0 2rem;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  @media only screen and (${DEVICES.md}) {
    grid-area: 1 / 1 / 2 / 3;
    justify-content: space-between;
  }
`;

const InviteFriendsLink = styled(Button)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  /* @media only screen and (${DEVICES.md}) {
  } */
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
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

