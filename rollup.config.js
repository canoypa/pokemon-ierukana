import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.tsx",

  output: {
    dir: "dist",
    format: "es",
  },

  plugins: [
    typescript(),
    babel({ extensions: ["js", "ts", "tsx"] }),

    nodeResolve(),
    commonjs(),

    postcss({
      modules: true,
    }),
  ],
};
