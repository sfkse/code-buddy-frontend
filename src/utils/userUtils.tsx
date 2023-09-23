//SAVE USER CREDENTIALS
export const saveCredentials = (userID: string) => {
  const userKey = JSON.stringify({ key: userID });
  localStorage.setItem("user_key", userKey);
};

