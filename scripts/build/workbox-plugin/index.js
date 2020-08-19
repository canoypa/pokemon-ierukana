import { resolve } from "path";
import { generateSW } from "workbox-build";

export default function workboxPlugin() {
  generateSW({
    swDest: resolve("./docs/sw.js"),
    globDirectory: resolve("./docs"),
    globPatterns: ["**/*.{html,css,js}"],
  });

  return {
    name: "workbox-plugin",
  };
}
