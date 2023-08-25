import { styled } from "styled-components";

type MenuItems = { title?: string; text: string }[];

interface DropdownMenuProps {
  content: MenuItems;
}

const DropdownMenu = ({ content }: DropdownMenuProps) => {
  return (
    <MenuList>
      {content.map((item, index) => (
        <MenuItem key={index}>
          {item.title && <MenuItemTitle>{item.title}</MenuItemTitle>}
          <MenuItemText>{item.text}</MenuItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default DropdownMenu;

const MenuList = styled.ul`
  position: absolute;
  top: 3rem;
  right: 3%;
  min-width: 10rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: none;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
`;

const MenuItemTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.darkPrimaryColor};
`;

const MenuItemText = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.darkPrimaryColor};
`;

