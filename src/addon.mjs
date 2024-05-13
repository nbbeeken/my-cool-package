import path from "node:path";
import process from "node:process";
import os from "node:os";

function tryDynamicLoad(addonPath) {
    const module = { exports: {} };
    try {
        process.dlopen(module, path.resolve(import.meta.dirname, '..', addonPath), os.constants.dlopen.RTLD_NOW);
        return module.exports;
    } catch {
        return null;
    }
}

const { platform, arch } = process;

const paths = [
    'build/Debug/addon.node',
    'build/Release/addon.node',
    ...(platform === 'linux' ?
      [`build/Release/addon-linux-${arch}-gnu.node`, `build/Release/addon-linux-${arch}-gnu.node`] :
      [`build/Release/addon-${platform}-${arch}.node`]),
]

let module;
for (const path of paths) {
    module = tryDynamicLoad(path);
    if (module.done) break;
}

const exports = module;
export default exports;
