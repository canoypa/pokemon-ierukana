import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/pages/root/index.tsx",

  output: {
    dir: "dist",
    format: "es",
  },

  plugins: [
    postcss({
      modules: true,
    }),

    babel(),
    typescript(),

    commonjs(),
    nodeResolve(),
  ],
};
