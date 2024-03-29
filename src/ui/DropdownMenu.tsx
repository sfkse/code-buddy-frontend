import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  background-color: var(--color-white);
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  border: 1px solid var(--color-black);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 1rem;
  font-size: var(--font-size-sm);
  cursor: pointer;

  &:hover {
    background-color: var(--color-orange-light);
  }
`;

interface DropdownMenuItemProps {
  name: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}
interface DropdownMenuProps {
  menuItems: DropdownMenuItemProps[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function DropdownMenu({ menuItems, isOpen, setIsOpen }: DropdownMenuProps) {
  const closeMenu = () => setIsOpen(false);
  const ref = useOutsideClick(closeMenu);

  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper ref={ref}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} onClick={item.onClick}>
          {item.icon}
          {item.name}
        </MenuItem>
      ))}
    </Wrapper>
  );
}

export default DropdownMenu;

