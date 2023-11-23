import { Configuration } from "webpack";

export const buildResolver = (): Configuration['resolve'] => ({
  extensions: ['.tsx', '.ts', '.js'],
})