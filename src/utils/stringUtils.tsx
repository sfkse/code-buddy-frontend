export const transformToHashtags = (string: string) => {
  const splittedStrings = string.split(";");

  return splittedStrings.map((string) => `#${string}`);
};

