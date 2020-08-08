import { FC } from "preact";

type Props = {
  icon: FC;
};
export const IconButton: FC<Props> = ({ icon: Icon }) => (
  <button>
    <Icon />
  </button>
);
