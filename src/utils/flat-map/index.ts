export const flatMap = <T, K>(array: T[], callback: (value: T) => K[]) => {
  const result: K[] = [];
  array.forEach((v) => callback(v).forEach((t) => result.push(t)));
  return result;
};
