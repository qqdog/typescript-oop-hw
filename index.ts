import { ConfigManager } from "./src/class/configManager";
import { ScheduleManager } from './src/class/scheduleManager';
import { Config } from "./src/class/config";
import { Schedule } from "./src/class/schedule";
import { MyBackupService } from "./src/class/service/myBackupService";

console.log("Hello World index.ts");

/** verify ConfigManager and ScheduleManager */

// let configManager = new ConfigManager();
// configManager.processJsonConfig();
// let scheduleManager = new ScheduleManager();
// scheduleManager.processJsonConfig();

// for (var i=0; i<configManager.count; i++) {
//     console.log("this is in index.ts " + i);
//     console.log(configManager.configs[i].ext);
// }

// for (var j=0; j<scheduleManager.count; j++) {
//     console.log("this is in index.ts " + j);
//     console.log(scheduleManager.schedules[j]);
// }

/** verify myBackupService(need to change the attribute of manager(private to public) first) */
// let myBackupService = new MyBackupService();
// myBackupService.processJsonConfigs;
// for (var k=0; k<myBackupService.managers.length; k++) {
//     console.log("this is in index.ts " + k);
//     console.log(myBackupService.managers);
// }