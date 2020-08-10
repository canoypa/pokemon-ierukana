import { resolve, join } from "path";
import { copyFile, stat, exists, readdir, mkdir, readFile } from "fs";

const copyDir = (src, dest) => {
  stat(src, (_err, fileStat) => {
    if (fileStat.isDirectory()) {
      exists(dest, (exist) => {
        const next = () => {
          readdir(src, (_err, fileNames) => {
            fileNames.forEach((itemName) => {
              copyDir(join(src, itemName), join(dest, itemName));
            });
          });
        };

        if (!exist) mkdir(dest, next);
        else next();
      });
    } else {
      exists(dest, (exist) => {
        if (exist) {
          // 変更がある場合のみコピー
          readFile(src, (_err, buf1) => {
            readFile(dest, (_err, buf2) => {
              if (Buffer.compare(buf1, buf2)) copyFile(src, dest, () => {});
            });
          });
        } else {
          copyFile(src, dest, () => {});
        }
      });
    }
  });
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
