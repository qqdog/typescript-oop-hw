import { Schedule } from "./schedule";
import * as scheduleJsonFile from "../assets/json/schedule.json";

export class ScheduleManager {
    schedules: Schedule[] = [];

    /** schedules 裡面有幾個 schedule */
    count: number;

    processSchedules() {
        /** 
         * typeof scheduleJsonFile is object 
         * file object to string
         */
        const jsonFileString: string = JSON.stringify(scheduleJsonFile);
        
        /** type of scheduleObj is object */
        const schedulesObj = JSON.parse(jsonFileString).schedules;
        
        /** save data */
        this.count = schedulesObj.length;
        for (let i=0; i<this.count; i++) {            
            let scheduleObj = JSON.parse(JSON.stringify(schedulesObj[i]));
            
            let ext: string = scheduleObj.ext;
            let interval: string = scheduleObj.interval;
            let time: string = scheduleObj.time;
            
            this.schedules[i] = new Schedule(ext, interval, time);
        }
    }
}