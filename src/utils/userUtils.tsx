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
  const userKeyObj = JSON.parse(localStorage.getItem("credentials") || "");

  return userKeyObj.key;
};

