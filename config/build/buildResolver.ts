import path from "path";
import { Configuration } from "webpack";

const PROJECT_ROOT_PATH = path.resolve(__dirname, '../../');
const SRC_DIR_PATH = `${PROJECT_ROOT_PATH}/src`;

export const buildResolver = (): Configuration['resolve'] => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferRelative: true,
  alias: {
    'api': `${SRC_DIR_PATH}/api`,
    'components': `${SRC_DIR_PATH}/components`,
    'constants': `${SRC_DIR_PATH}/constants`,
    'hooks': `${SRC_DIR_PATH}/hooks`,
    'modules': `${SRC_DIR_PATH}/modules`,
    'store': `${SRC_DIR_PATH}/store`,
    'types': `${SRC_DIR_PATH}/types`,
    'utils': `${SRC_DIR_PATH}/utils`,
  }
})