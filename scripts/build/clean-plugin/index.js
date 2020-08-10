import { readdirSync, rmdirSync, statSync, unlinkSync } from "fs";
import { resolve, join } from "path";

const rmDir = (path) => {
  const itemNames = readdirSync(resolve(path));

  itemNames.forEach((itemName) => {
    const filePath = join(path, itemName);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      rmDir(filePath);
      rmdirSync(filePath);
    } else {
      unlinkSync(filePath);
    }
  });
};

export default function cleanPlugin() {
  rmDir("./docs");

  return {
    name: "clean-plugin",
  };
}
