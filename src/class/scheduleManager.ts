import * as scheduleJsonFile from "../assets/json/schedule.json";
import { Schedule } from "./schedule";
import { JsonManager } from "../class/jsonManager";

export class ScheduleManager extends JsonManager{
    schedules: Schedule[] = [];

    /** schedules 裡面有幾個 schedule */
    count: number;

    processJsonConfig(): void {
        const schedulesObj = this.getJsonObject(scheduleJsonFile).schedules;

        /** save data */
        this.count = schedulesObj.length;
        for (let i=0; i<this.count; i++) {           
            let scheduleObj = schedulesObj[i];
            
            let ext: string = scheduleObj.ext;
            let interval: string = scheduleObj.interval;
            let time: string = scheduleObj.time;
            
            this.schedules[i] = new Schedule(ext, interval, time);
        }
    }
}