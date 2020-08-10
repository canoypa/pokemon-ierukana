const path = require("path");
const { generateSW } = require("workbox-build");

generateSW({
  swDest: path.resolve("./docs/sw.js"),
  globDirectory: path.resolve("./docs"),
  globPatterns: ["**/*.{html,css,js}"],
}).then(({ count, size }) => {
  console.log(
    `Generated sw.js, which will precache ${count} files, totaling ${size} bytes.`
  );
});
