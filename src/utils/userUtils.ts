import { UserSkills } from "../types/user";

//SAVE USER CREDENTIALS
export const saveCredentials = (
  userID: string,
  activated: boolean = true
): void => {
  const userCredentials = JSON.stringify({ key: userID, activated });
  localStorage.setItem("credentials", userCredentials);
};

//FETCH USER CREDENTIALS
export const fetchCredentials = (): string => {
  const userKeyObj = localStorage.getItem("credentials")
    ? JSON.parse(localStorage.getItem("credentials"))
    : "";

  return userKeyObj.key;
};

export const transformSkillsToHashtags = (skills: string) => {
  const parsedSkills = JSON.parse(skills) as UserSkills[];

  const extractedSkills = parsedSkills.map((skill: any) => skill.label);
  const hashtagAdded = extractedSkills.join("#");
  return `#${hashtagAdded}`;
};

