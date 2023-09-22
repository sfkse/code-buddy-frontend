import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { SiGotomeeting } from "react-icons/si";
import { CgClose } from "react-icons/cg";
import { GiCalendar, GiDiscussion } from "react-icons/gi";
import {
  FaSearchLocation,
  FaRegStickyNote,
  FaRocketchat,
} from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiCodeBracket } from "react-icons/hi2";
import { menuItemBorder } from "../../styles/Global";
import { CSSProperties } from "react";
import { devices } from "../../styles/Theme";

type SidebarProps = {
  toggle: boolean;
  handleToggle: () => void;
};

type MenuLinkProps = {
  label: string;
  icon: JSX.Element;
  link: string;
};

const menuLinks: MenuLinkProps[] = [
  {
    label: "Home",
    icon: <LuLayoutDashboard />,
    link: "/",
  },
  {
    label: "Find devs",
    icon: <FaSearchLocation />,
    link: "/find-devs",
  },
  {
    label: "Notes",
    icon: <FaRegStickyNote />,
    link: "/notes/my-notes",
  },
  {
    label: "Chat",
    icon: <FaRocketchat />,
    link: "/chat",
  },
  {
    label: "Events",
    icon: <SiGotomeeting />,
    link: "/events",
  },
  {
    label: "Discussions",
    icon: <GiDiscussion />,
    link: "/discussions",
  },
  {
    label: "Calender",
    icon: <GiCalendar />,
    link: "/calender",
  },
];
const Sidebar = ({ toggle, handleToggle }: SidebarProps) => {
  return (
    <SidebarWrapper $toggleSidebar={toggle}>
      <div>
        FELLOW <HiCodeBracket /> CODERS
      </div>
      <CgCloseIcon onClick={handleToggle} />
      <MenuItemWrapper>
        {menuLinks.map((link) => (
          <NavLinkItem
            to={link.link}
            key={link.label}
            style={({ isActive }): CSSProperties => ({
              fontWeight: isActive ? "bold" : "normal",
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

const SidebarWrapper = styled.div<{ $toggleSidebar: boolean }>`
  grid-area: 1 / 1 / 3 / 2;
  background-color: ${({ theme }) => theme.colors.darkPrimaryColor};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.layout.padding};
  @media only screen and (${devices.md}) {
    position: absolute;
    left: -100%;
    top: 0;
    bottom: 0;
    z-index: 500;
    transition: left 0.3s ease-in-out;

    ${({ $toggleSidebar }) =>
      $toggleSidebar && {
        left: 0,
      }}
  }
`;

const CgCloseIcon = styled(CgClose)`
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  @media only screen and (${devices.md}) {
    display: block;
  }
`;

const MenuItemWrapper = styled.div`
  margin-top: 2rem;
`;

const NavLinkItem = styled(NavLink)`
  list-style: none;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  padding: 0.8rem 0.5rem;

  &:hover {
    ${menuItemBorder}
  }
`;

