export const unixEpochToDateTime = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString({
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
