export type Action<T extends string, S = undefined> = {
  type: T;
  data?: S;
  error?: Error;
  meta?: unknown;
};
