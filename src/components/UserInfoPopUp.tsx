import { styled } from "styled-components";
import Button from "./Button";
import { User } from "../types/user";
import { transformToHashtags } from "../utils/stringUtils";
import { useEffect, useState } from "react";

type UserInfoPopUpProps = {
  user: User;
};

const UserInfoPopUp = ({ user }: UserInfoPopUpProps) => {
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    if (user.skills) setSkills(transformToHashtags(user.skills));
  }, [user.skills]);

  return (
    <PopUpWrapper>
      <UserLogo />
      <UserLocation>{user.location}</UserLocation>
      <UserFullName>{`${user.firstname} ${user.lastname}`}</UserFullName>
      <UserTagsWrapper>
        {skills.map((skill: string) => (
          <UserTags key={skill}>{`${skill} `}</UserTags>
        ))}
      </UserTagsWrapper>
      <Actions>
        <Button title="CALL" />
        <Button title="MESSAGE" />
      </Actions>
    </PopUpWrapper>
  );
};

export default UserInfoPopUp;

const PopUpWrapper = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.darkPrimaryColor};
  border-radius: 3px;
  box-shadow: 4px 8px ${({ theme }) => theme.colors.darkPrimaryColor};
`;

const UserLogo = styled.p`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkPrimaryColor};
`;

const UserLocation = styled.span`
  height: 20px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.7rem;
`;

const UserFullName = styled.span``;

const UserTagsWrapper = styled.div``;

const UserTags = styled.span``;

const Actions = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.darkPrimaryColor};
`;

