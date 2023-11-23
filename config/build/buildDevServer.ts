import 'webpack-dev-server';
import { BuildOptions } from './types/types';

export const buildDevServer = (options: BuildOptions) => ({
    port: options.port ?? 3000,
    open: true
});