import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { SiGotomeeting } from "react-icons/si";
import { GiCalendar, GiDiscussion } from "react-icons/gi";
import {
  FaSearchLocation,
  FaRegStickyNote,
  FaRocketchat,
  FaDashcube,
} from "react-icons/fa";
import { menuItemBorder } from "../../styles/Global";
import { CSSProperties } from "react";

type MenuLinkTypes = {
  label: string;
  icon: JSX.Element;
  link: string;
};
const menuLinks: MenuLinkTypes[] = [
  {
    label: "Dashboard",
    icon: <FaDashcube />,
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
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div>LOGO</div>
      <MenuItemWrapper>
        {menuLinks.map((link) => (
          <NavLink
            to={link.link}
            key={link.label}
            style={({ isActive }): CSSProperties => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            <MenuItem>
              {link.icon}
              {link.label}
            </MenuItem>
          </NavLink>
        ))}
      </MenuItemWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  background-color: ${(props) => props.theme.colors.darkPrimaryColor};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.layout.padding};
`;

const MenuItemWrapper = styled.div`
  margin-top: 2rem;
`;

const MenuItem = styled.span`
  list-style: none;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.8rem 0.5rem;

  &:hover {
    ${menuItemBorder}
  }
`;

