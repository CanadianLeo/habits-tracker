import 'webpack-dev-server';
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildResolver } from './buildResolver';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/types';

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {

  const isDev = options.mode === 'development';
  
  return {
    mode: options.mode ?? 'development',
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: 'main.js',
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolver(),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined
  }
}