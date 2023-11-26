import 'webpack-dev-server';
import { BuildOptions } from './types/types';

export const buildDevServer = (options: BuildOptions) => ({
    port: options.port ?? 3000,
    open: true,
    historyApiFallback: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
});