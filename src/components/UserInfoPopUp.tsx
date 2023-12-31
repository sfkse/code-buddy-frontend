import { styled } from "styled-components";
import { RiUserAddFill } from "react-icons/ri";

import Button from "./Button";

import { User } from "../types/user";
import { transformSkillsToHashtags } from "../utils/userUtils";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";

type UserInfoPopUpProps = {
  user: User;
  type?: string;
  size?: string;
};

const UserInfoPopUp = ({ user, type }: UserInfoPopUpProps) => {
  const { authUser } = useFetchAuthUser();
  const disableConnectButton =
    user?.idusers === authUser.idusers ||
    Object.keys(authUser).length === 0 ||
    !authUser.registered;

  return (
    <PopUpWrapper>
      {user && (
        <>
          <UserLogo />
          <UserLocation>{`${user.location?.city}, ${user.location?.country}`}</UserLocation>
          <UserFullName>{`${user.firstname} ${user.lastname}`}</UserFullName>
          <UserTagsWrapper>
            {transformSkillsToHashtags(user.skills)}
          </UserTagsWrapper>
          {type !== "noAction" && (
            <Actions>
              <Button
                title="CONNECT"
                variant="primary"
                icon={<RiUserAddFill />}
                iconStyle={{ marginRight: 0 }}
                fullWidth
                disabled={disableConnectButton}
              />
            </Actions>
          )}
        </>
      )}
    </PopUpWrapper>
  );
};

export default UserInfoPopUp;

const PopUpWrapper = styled.div`
  display: flex;
  width: 200px;
  padding-top: 0.5rem;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  box-shadow: 4px 8px ${({ theme }) => theme.colors.primary};
`;

const UserLogo = styled.p`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const UserLocation = styled.span`
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const UserFullName = styled.span``;

const UserTagsWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  margin: 0.5rem;
  word-break: break-all;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.primary};
`;

