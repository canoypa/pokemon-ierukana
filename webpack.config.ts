import * as webpack from "webpack";
import * as path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  mode: "production",

  output: {
    path: path.resolve("./build"),
    filename: "index.js"
  },

  entry: [path.resolve("./src/index.ts"), path.resolve("./src/index.scss")],

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin({ filename: "index.css" })],

  resolve: { extensions: [".ts"] },

  devtool: "source-map"
};

module.exports = config;
