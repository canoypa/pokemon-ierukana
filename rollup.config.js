import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodeGlobal from "rollup-plugin-node-globals";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";
import assetsPlugin from "./scripts/build/assets-plugin/index.js";
import workboxPlugin from "./scripts/build/workbox-plugin/index.js";
import HTMLPlugin from "./scripts/build/html-plugin/index.js";

export default {
  input: "src/index.tsx",

  output: {
    dir: "docs",
    format: "es",
    sourcemap: true,
  },

  plugins: [
    typescript(),
    babel({ extensions: ["js", "ts", "tsx"] }),

    nodeResolve(),
    commonjs(),

    nodeGlobal(),

    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),

    postcss({
      modules: true,
    }),

    terser(),

    HTMLPlugin(),
    assetsPlugin(),
    workboxPlugin(),
  ],
};
