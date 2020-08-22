import { h, FC, JSX, cloneElement } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import styles from "./styles.scss";

type Props = {
  rowCount: number;
  rowHeight: number;

  render: (rowIndex: number) => JSX.Element;
} & JSX.HTMLAttributes<HTMLDivElement>;
export const Windowing: FC<Props> = ({
  rowCount,
  rowHeight,
  render,
  className,
}) => {
  const container = useRef<HTMLDivElement>();

  const [contents, setContents] = useState<JSX.Element[]>([]);

  const containerHeight = rowHeight * rowCount;

  const re = () => {
    const scrollTop = container.current.scrollTop;
    const fromIndex = Math.max(0, ~~(scrollTop / rowHeight) - 5);
    const toIndex = Math.min(
      rowCount,
      fromIndex + ~~(window.innerHeight / rowHeight) + 5
    );

    const range = (from: number, to: number) => {
      const result = [];
      for (let i = from; i <= to; i++) result.push(i);
      return result;
    };

    const createContent = (rowIndex: number) => {
      const props = {
        key: rowIndex,
        style: {
          position: "absolute",
          top: rowIndex * rowHeight,
        },
      };
      return cloneElement(render(rowIndex), props);
    };

    const newContents = range(fromIndex, toIndex).map((i) => createContent(i));

    setContents(newContents);
  };

  useEffect(() => re(), [rowCount]);

  return (
    <div onScroll={re} ref={container} className={styles.root}>
      <div className={className} style={{ height: containerHeight }}>
        {contents}
      </div>
    </div>
  );
};
