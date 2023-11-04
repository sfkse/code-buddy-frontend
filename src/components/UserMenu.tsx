import { styled } from "styled-components";

import DropdownMenu from "./DropdownMenu";
import { useLogoutUser } from "../hooks/user/useLogoutUser";
import { useNavigate } from "react-router-dom";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";
import Button from "./Button";
import ToastMessage from "./ToastMessage";

const UserMenu = () => {
  const { authUser, error } = useFetchAuthUser();
  const { mutate } = useLogoutUser();
  const navigate = useNavigate();

  const dropdownMenuContent = [
    { text: "Settings", onClick: () => navigate("/settings") },
    { text: "Logout", onClick: () => mutate() },
  ];
  return (
    <>
      {error ? <ToastMessage text={error.message} /> : null}
      <MenuWrapper>
        {Object.keys(authUser).length > 0 ? (
          <>
            <ProfileImage
              src={`https://ui-avatars.com/api/?name=${authUser.firstname.slice(
                0,
                1
              )}+${authUser.lastname.slice(0, 1)}`}
              alt=""
            />
            <DropdownMenu content={dropdownMenuContent} />
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
    </>
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

