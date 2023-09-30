import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Button from "./Button";
import { User } from "../types/user";
import { transformToHashtags } from "../utils/stringUtils";

type UserInfoPopUpProps = {
  user: User;
  type?: string;
  size?: string;
};

const UserInfoPopUp = ({ user, type }: UserInfoPopUpProps) => {
  const [skills, setSkills] = useState<string[]>([]);
  const parsedLocation = JSON.parse(user.location);
  useEffect(() => {
    if (user.skills) setSkills(transformToHashtags(user.skills));
  }, [user.skills]);

  return (
    <PopUpWrapper>
      <UserLogo />
      <UserLocation>{`${parsedLocation.city}, ${parsedLocation.country}`}</UserLocation>
      <UserFullName>{`${user.firstname} ${user.lastname}`}</UserFullName>
      <UserTagsWrapper>
        {skills.map((skill: string) => (
          <UserTags key={skill}>{`${skill} `}</UserTags>
        ))}
      </UserTagsWrapper>
      {type !== "noAction" && (
        <Actions>
          <Button title="CALL" />
          <Button title="MESSAGE" />
        </Actions>
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
  color: ${({ theme }) => theme.colors.primaryTransparent};
  font-size: 0.7rem;
`;

const UserFullName = styled.span``;

const UserTagsWrapper = styled.div``;

const UserTags = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Actions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.primary};
`;

