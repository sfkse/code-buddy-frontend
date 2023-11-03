import { styled } from "styled-components";

import DropdownMenu from "./DropdownMenu";
import { useLogoutUser } from "../hooks/user/useLogoutUser";
import { useNavigate } from "react-router-dom";
import { useFetchSingleUser } from "../hooks/user/useFetchSingleUser";
import { fetchCredentials } from "../utils/userUtils";
import Button from "./Button";
import ToastMessage from "./ToastMessage";

const UserMenu = () => {
  const { logoutUser } = useLogoutUser();
  const { user, error } = useFetchSingleUser(fetchCredentials());
  const navigate = useNavigate();
  const dropdownMenuContent = [
    { text: "Settings", onClick: () => navigate("/settings") },
    { text: "Logout", onClick: () => logoutUser() },
  ];
  return (
    <MenuWrapper>
      {error ? (
        <ToastMessage
          text={error instanceof Error ? error.response.data.message : ""}
        />
      ) : null}
      {user && Object.keys(user).length > 0 ? (
        <>
          <ProfileImage
            src={`https://ui-avatars.com/api/?name=${user.firstname.slice(
              0,
              1
            )}+${user.lastname.slice(0, 1)}`}
            alt=""
          />
          <DropdownMenu content={dropdownMenuContent} />{" "}
        </>
      ) : (
        <LoginButton
          title="LOGIN"
          variant="primary"
          customStyle={{ padding: "0.5rem 1rem" }}
          onClick={() => navigate("/login")}
        />
      )}
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

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

