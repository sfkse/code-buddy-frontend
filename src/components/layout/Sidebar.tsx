import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { CSSProperties } from "react";
import { CgClose } from "react-icons/cg";
import { HiCodeBracket } from "react-icons/hi2";

import { menuItemBorder } from "../../styles/Global";
import { DEVICES } from "../../styles/theme";
import { menuLinks } from "../../assets/data/menu";

type SidebarProps = {
  toggle: boolean;
  handleToggle: () => void;
};

const Sidebar = ({ toggle, handleToggle }: SidebarProps) => {
  return (
    <SidebarWrapper $toggleSidebar={toggle}>
      <Logo>
        FELLOW <HiCodeBracketStyle /> CODERS
      </Logo>
      <CgCloseIcon onClick={handleToggle} />
      <MenuItemWrapper>
        {menuLinks.map((link) => (
          <NavLinkItem
            to={link.link}
            key={link.label}
            style={({ isActive }): CSSProperties => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#fff" : "#ccc",
            })}
          >
            {link.icon}
            {link.label}
          </NavLinkItem>
        ))}
      </MenuItemWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div<{
  $toggleSidebar: boolean;
}>`
  grid-area: 1 / 1 / 3 / 2;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.layout.padding};
  padding-bottom: 0;
  @media only screen and (${DEVICES.md}) {
    position: absolute;
    left: ${(props) => (props.$toggleSidebar ? "-100%" : "0")};
    top: 0;
    right: ${(props) => (props.$toggleSidebar ? "100%" : "0")};
    bottom: 0;
    z-index: 500;
    transition: left 0.3s ease-in 0s, right 0.3s ease-in 0s;
    overflow-y: ${(props) => (props.$toggleSidebar ? "hidden" : "scroll")};
  }
`;

const CgCloseIcon = styled(CgClose)`
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  @media only screen and (${DEVICES.md}) {
    display: block;
  }
`;

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

const HiCodeBracketStyle = styled(HiCodeBracket)`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 900;
  padding-top: 6px;
  font-size: 1.2rem;
`;

const MenuItemWrapper = styled.div`
  margin-top: 2rem;
`;

const NavLinkItem = styled(NavLink)`
  list-style: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  padding: 0.8rem 0.5rem;

  &:hover {
    ${menuItemBorder}
  }
`;

