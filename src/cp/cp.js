import { fork } from 'node:child_process';
import { getPath } from '../customModules/getPath.js';

const spawnChildProcess = async (args) => {
    const scriptPath = getPath(import.meta.url, "files", "script.js");
    const childProcess = fork(scriptPath, args);
};

spawnChildProcess(["a", "b", "c"]);