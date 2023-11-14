import { CSSProperties, useEffect } from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiCodeBracket } from "react-icons/hi2";

import { DEVICES, MENU_ITEM_BORDER } from "../../styles/theme";
import { menuLinks } from "../../assets/data/menu";
import CopyButton from "../CopyButton";

type SidebarProps = {
  toggle: boolean;
  handleOnToggle: (toggle: boolean) => void;
};

const Sidebar = ({ toggle, handleOnToggle }: SidebarProps) => {
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);

  return (
    <SidebarWrapper $toggleSidebar={toggle}>
      <Logo>
        FELLOW <HiCodeBracketStyle /> CODERS
      </Logo>
      <CgCloseIcon onClick={() => handleOnToggle(false)} />
      <MenuItemWrapper>
        {menuLinks.map((link) => (
          <NavLinkItem
            to={link.link}
            key={link.label}
            style={({ isActive }): CSSProperties => ({
              fontWeight: isActive && !link.soon ? "bold" : "normal",
              color: isActive && !link.soon ? "#fff" : "#ccc",
            })}
            onClick={() => handleOnToggle(false)}
          >
            {link.icon}
            {link.label}
            {link.soon && <SoonLabel>Soon</SoonLabel>}
          </NavLinkItem>
        ))}

        <CopyButton urlPath="" fullWidth={true} />
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
  height: 100%;
  @media only screen and (${DEVICES.md}) {
    position: absolute;
    left: ${(props) => (props.$toggleSidebar ? "0" : "-100%")};
    top: 0;
    right: ${(props) => (props.$toggleSidebar ? "0" : "100%")};
    bottom: 0;
    z-index: 1500;
    min-height: 100vh;
    transition: left 0.5s ease-in 0s, right 0.3s ease-in 0s;
  }
`;

const CgCloseIcon = styled(CgClose)`
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: ${({ theme }) => theme.font.heading.base};
  cursor: pointer;

  @media only screen and (${DEVICES.md}) {
    display: block;
  }
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.font.body.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  @media only screen and (${DEVICES.md}) {
    font-size: ${({ theme }) => theme.font.body.xs};
  }
`;

const HiCodeBracketStyle = styled(HiCodeBracket)`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 900;
  padding-top: 6px;
  font-size: ${({ theme }) => theme.font.body.xl};
`;

const MenuItemWrapper = styled.div`
  margin-top: 2rem;
  @media only screen and (${DEVICES.md}) {
    height: 80%;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.font.heading.base};
  }
`;

const NavLinkItem = styled(NavLink)`
  list-style: none;
  font-size: ${({ theme }) => theme.font.body.base};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.8rem 0.5rem;

  &:hover {
    ${MENU_ITEM_BORDER}
  }

  @media only screen and (${DEVICES.md}) {
    padding: 0.8rem 0;
    font-size: ${({ theme }) => theme.font.body.xs};

    &:hover {
      border: none;
    }
  }
`;

const SoonLabel = styled.span`
  font-size: 0.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.01rem 0.2rem;
  border-radius: 3px;
  background: rgb(224, 15, 15);
  background: linear-gradient(
    90deg,
    rgba(224, 15, 15, 1) 0%,
    rgba(214, 114, 8, 1) 35%,
    rgba(255, 244, 0, 1) 100%
  );
`;

