import { resolve, join } from "path";
import {
  copyFile,
  existsSync,
  statSync,
  mkdirSync,
  readdirSync,
  readFileSync,
} from "fs";

const copyDir = (src, dest) => {
  const exist = existsSync(dest);
  const isDirectory = statSync(src).isDirectory();

  if (isDirectory) {
    if (!exist) mkdirSync(dest);

    const fileNames = readdirSync(src);
    fileNames.forEach((itemName) =>
      copyDir(join(src, itemName), join(dest, itemName))
    );
  } else {
    if (exist) {
      // 変更がある場合のみコピー
      const buf1 = readFileSync(src);
      const buf2 = readFileSync(dest);
      if (Buffer.compare(buf1, buf2)) copyFile(src, dest, () => {});
    } else {
      copyFile(src, dest, () => {});
    }
  }
};

export default function assetsPlugin() {
  copyDir(resolve("./src/assets"), resolve("./docs/assets"));
  copyFile(
    resolve("./src/manifest.json"),
    resolve("./docs/manifest.json"),
    () => {}
  );

  return {
    name: "assets-plugin",
  };
}
