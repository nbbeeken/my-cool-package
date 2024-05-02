import path from "node:path";
import process from "node:process";
import os from "node:os";

const module = { exports: {} };
process.dlopen(module, path.resolve(import.meta.dirname, '..', 'build/Release/addon.node'), os.constants.dlopen.RTLD_NOW);
export default module.exports;
