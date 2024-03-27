export const getBatch = <T>(list: T[], amount: number, index: number) => {
  const startIndex = (index - 1) * amount;
  const endIndex = startIndex + amount;
  const nextBatch = list.slice(startIndex, endIndex);
  return nextBatch;
};
