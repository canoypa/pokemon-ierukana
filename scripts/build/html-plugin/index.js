import { readFile, writeFile } from "fs";
import { resolve } from "path";
import { minify } from "html-minifier-terser";

const options = {
  removeAttributeQuotes: true, // 不要な属性クォートを削除
  collapseBooleanAttributes: true, // boolean 属性から属性値を削除
  removeRedundantAttributes: true, // デフォルト値の属性を削除
  removeOptionalTags: true, // 不要なタグを削除,
  collapseWhitespace: true, // 前提
  collapseInlineTagWhitespace: true, // タグ間の改行削除
};

export default function HTMLPlugin() {
  readFile(resolve("./src/index.html"), { encoding: "utf8" }, (_err, html) => {
    writeFile(resolve("./docs/index.html"), minify(html, options), () => {});
  });

  return {
    name: "html-plugin",
  };
}
