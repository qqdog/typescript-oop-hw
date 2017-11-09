import { JsonManager } from "../jsonManager";
import { ConfigManager } from "../configManager";
import { ScheduleManager } from '../scheduleManager';

export class MyBackupService {
    //private managers: JsonManager[] = [];
    managers: JsonManager[] = []; 

    constructor()
    {
        this.managers.push(new ConfigManager());
        this.managers.push(new ScheduleManager());
    }

    processJsonConfigs()
    {
        for(let i = 0; i< this.managers.length -1; i++) {
            this.managers[i].processJsonConfig();
        }
    }
}