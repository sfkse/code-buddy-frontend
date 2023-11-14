export const convertPassedDaysFromTimestamp = (seconds: number) => {
  const passedDays = Math.floor((Date.now() / 1000 - seconds) / 60 / 60 / 24);
  return passedDays;
};

