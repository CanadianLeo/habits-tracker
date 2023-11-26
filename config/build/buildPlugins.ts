import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => ([
  new HtmlWebpackPlugin({ template: options.paths.html }),
  new MiniCssExtractPlugin()
]);