export const getArray = (count) => {
  if (!Number.isInteger(count)) return []
  return new Array(count).fill(true);
}