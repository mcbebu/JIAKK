const getDateString = (date) => {
  return date.toLocaleString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

export { getDateString };