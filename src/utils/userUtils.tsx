//SAVE USER CREDENTIALS
export const saveCredentials = (userID: string) => {
  const userKey = JSON.stringify({ key: userID });
  localStorage.setItem("user_key", userKey);
};

//FETCH USER CREDENTIALS
export const fetchCredentials = () => {
  const userKeyObj = JSON.parse(localStorage.getItem("user_key") || "");

  return userKeyObj.key;
};

