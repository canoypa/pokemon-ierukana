import { FunctionComponent } from "preact";

declare module "preact" {
  type FC<P = {}> = FunctionComponent<P>;
}
