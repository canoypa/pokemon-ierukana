import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodeGlobal from "rollup-plugin-node-globals";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import assetsPlugin from "./scripts/build/assets-plugin/index.js";
import workboxPlugin from "./scripts/build/workbox-plugin/index.js";
import HTMLPlugin from "./scripts/build/html-plugin/index.js";
import cleanPlugin from "./scripts/build/clean-plugin/index.js";

export default {
  input: "src/index.tsx",

  output: {
    dir: "docs",
    format: "es",
  },

  plugins: [
    cleanPlugin(),

    typescript(),
    babel({ extensions: ["js", "ts", "tsx"] }),

    nodeResolve(),
    commonjs(),

    nodeGlobal(),

    postcss({
      modules: true,
    }),

    HTMLPlugin(),
    assetsPlugin(),
    workboxPlugin(),
  ],
};
