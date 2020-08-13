type Data<D> = D extends NonNullable<D> ? { data: D } : { data?: D };

export type Action<T extends string, S = null> = {
  type: T;
  error?: Error;
  meta?: unknown;
} & Data<S>;
