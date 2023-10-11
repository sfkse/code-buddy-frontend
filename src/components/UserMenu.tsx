import { styled } from "styled-components";

import DropdownMenu from "./DropdownMenu";
import { useLogoutUser } from "../hooks/user/useLogoutUser";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const { logoutUser } = useLogoutUser();
  const navigate = useNavigate();
  const dropdownMenuContent = [
    { text: "Settings", onClick: () => navigate("/settings") },
    { text: "Logout", onClick: () => logoutUser() },
  ];

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

