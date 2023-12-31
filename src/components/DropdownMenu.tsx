import { MouseEventHandler } from "react";
import { styled } from "styled-components";

type MenuItems = {
  title?: string;
  text: string;
  onClick?: MouseEventHandler;
}[];

interface DropdownMenuProps {
  content: MenuItems;
}

const DropdownMenu = ({ content }: DropdownMenuProps) => {
  return (
    <MenuList>
      {content.map((item, index) => (
        <MenuItem key={index} onClick={item.onClick}>
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
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: none;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.35rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

const MenuItemTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.body.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const MenuItemText = styled.p`
  font-size: ${({ theme }) => theme.font.body.xs};
  color: ${({ theme }) => theme.colors.primary};
`;

