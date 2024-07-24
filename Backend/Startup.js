import { DbQuery } from './DbRemote//DbConnect.js';

async function Startup() {
    await DbQuery();
    window.setTimeout(TimeRun, 10000);
}