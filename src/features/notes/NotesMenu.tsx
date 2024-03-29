import { NavLink } from "react-router-dom";
import Icons from "../../ui/Icons";
import Search from "../../ui/Search";
import styled from "styled-components";

const notesMenu = [
  {
    label: "Your notes",
    icon: <Icons.Note />,
    link: "/notes",
  },
  {
    label: "Reminders",
    icon: <Icons.Clock />,
    link: "/notes/reminders",
  },
  {
    label: "Tags",
    icon: <Icons.Tag />,
    link: "/notes/tags",
  },
  {
    label: "Bin",
    icon: <Icons.Bin />,
    link: "/notes/bin",
  },
];

function NotesMenu() {
  return (
    <Wrapper>
      <Search />
      <MenuList>
        {notesMenu.map((item, index) => (
          <MenuItem key={index} to={item.link} end>
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Wrapper>
  );
}

export default NotesMenu;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 0.17;
  padding: 0 2rem 0 0;
  min-height: 90vh;
  align-self: stretch;
  border-right: 1px solid var(--color-grey-light);
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 500;
  color: var(--color-grey-dark);
  padding: 0.3rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
  margin-bottom: 0.25rem;

  &:hover {
    background-color: var(--color-orange-light);
    outline: 1px solid var(--color-black);
    color: var(--color-black);
  }

  &.active {
    background-color: var(--color-orange-dark);
    border: 1px solid var(--color-black);
    color: var(--color-black);
  }
`;

