import { styled } from "styled-components";
import DropdownMenu from "./DropdownMenu";

const UserMenu = () => {
  const dropdownMenuContent = [{ text: "Settings" }, { text: "Logout" }];

  return (
    <MenuWrapper>
      <ProfileImage src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
      <DropdownMenu content={dropdownMenuContent} />
    </MenuWrapper>
  );
};

export default UserMenu;

const MenuWrapper = styled.div`
  position: relative;
  z-index: 500;
  padding: 0.5rem;
  &:hover > ul {
    display: flex;
    flex-direction: column;
    z-index: 1000;
  }
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
`;

