import { User, UserSkills } from "../types/user";

//SAVE USER CREDENTIALS
export const saveAuth = (authenticated: boolean): void => {
  localStorage.setItem("auth", JSON.stringify(authenticated));
};

//FETCH USER CREDENTIALS
export const fetchAuth = (): string => {
  return JSON.parse(localStorage.getItem("auth") || "false");
};

//FETCH USER AUTHENTICATION STATUS
export const isUserAuthenticated = (user: User): boolean => {
  return Boolean(Object.keys(user).length > 0);
};

//FETCH USER ACTIVATION STATUS
export const isUserActivated = (user: User): boolean => {
  return Boolean(Object.keys(user).length > 0 && user.registered);
};

export const transformSkillsToHashtags = (skills: UserSkills[]) => {
  const extractedSkills = skills.map((skill: any) => skill.label);
  const hashtagAdded = extractedSkills.join("#");
  return `#${hashtagAdded}`;
};

