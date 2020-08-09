export type Action<T extends string, S> = {
  type: T;
  data: S;
  error?: Error;
  meta?: unknown;
};
