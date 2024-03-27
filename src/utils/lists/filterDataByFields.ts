export const filterDataByFields = <T>(
  arr: T[],
  term: string,
  fields: (keyof T)[],
): T[] => {
  return arr.filter(item => {
    const values = fields.map(field => (item[field] as string).toLowerCase());
    return values.some(value => value.includes(term.toLowerCase()));
  });
};
