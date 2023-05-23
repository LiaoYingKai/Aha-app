export const getArray = (count = 10) => {
  if (!Number.isInteger(count)) return [];
  return new Array(count).fill(true);
};
