import { ConfigManager } from "./src/class/configManager";
import { ScheduleManager } from './src/class/scheduleManager';
import { Config } from "./src/class/config";
import { Schedule } from "./src/class/schedule";

console.log("Hello World index.ts");

let configManager = new ConfigManager();
configManager.processConfigs();
let scheduleManager = new ScheduleManager();
scheduleManager.processSchedules();

/** verify */
// for (var i=0; i<configManager.count; i++) {
//     console.log("this is in index.ts " + i);
//     console.log(configManager.configs[i]);
// }

// for (var j=0; j<scheduleManager.count; j++) {
//     console.log("this is in index.ts " + j);
//     console.log(scheduleManager.schedules[j]);
// }
