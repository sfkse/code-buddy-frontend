import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import Icons from "./Icons";
import LogoImg from "../assets/user-logo.png";

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const NotificationWrapper = styled.div`
  position: relative;
  margin-right: 1.5rem;
  transform: translateY(6px);
`;

const NotificationCount = styled.span`
  position: absolute;
  top: -0.4rem;
  right: -0.5rem;
  background-color: var(--color-orange-dark);
  color: var(--color-black);
  font-size: var(--font-size-xs);
  padding: 0.1rem 0.4rem;
  border-radius: 50%;
`;

const Menu = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const MenuItem = styled(NavLink)`
  padding: 0.5rem 1rem;
  width: 100%;
  color: var(--color-black);
  text-decoration: none;
  font-size: var(--font-size-sm);
  cursor: pointer;
  &:hover {
    background-color: var(--color-orange-dark);
  }
`;

const Logo = styled.img`
  cursor: pointer;
`;

function UserMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <MenuWrapper>
      <NotificationWrapper>
        <Icons.Notification />
        <NotificationCount>3</NotificationCount>
      </NotificationWrapper>
      <Logo src={LogoImg} alt="logo" onClick={() => setOpenMenu(!openMenu)} />
      {openMenu && (
        <Menu>
          <MenuItem to="/profile">Profile</MenuItem>
          <MenuItem to="/settings">Settings</MenuItem>
          <MenuItem to="/logout">Logout</MenuItem>
        </Menu>
      )}
    </MenuWrapper>
  );
}

export default UserMenu;

