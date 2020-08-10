import { resolve } from "path";
import { generateSW } from "workbox-build";

export default function workboxPlugin() {
  generateSW({
    swDest: resolve("./docs/sw.js"),
    globDirectory: resolve("./docs"),
    globPatterns: ["**/*.{html,css,js}"],
  }).then(({ count, size }) => {
    console.log(
      `Generated sw.js, which will precache ${count} files, totaling ${size} bytes.`
    );
  });

  return {
    name: "workbox-plugin",
  };
}
