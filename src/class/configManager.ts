import * as configJsonFile from "../assets/json/config.json";
import { Config } from "./config";
import { JsonManager } from "../class/jsonManager";

export class ConfigManager extends JsonManager {
    configs: Config[] = [];

    /** configs 裡面有幾個 config */
    count: number;

    processConfigs() {
        /** 
         * typeof configJsonFile is object 
         * file object to string
         */
        const jsonFileString: string = JSON.stringify(configJsonFile);
        
        /** type of configObj is object */
        const configsObj = JSON.parse(jsonFileString).configs;
        
        /** save data */
        this.count = configsObj.length;
        for (let i=0; i<this.count; i++) {            
            let configObj = JSON.parse(JSON.stringify(configsObj[i]));
            
            let ext: string = configObj.ext;
            let location: string = configObj.location;
            let subDirectory: string = configObj.subDirectory;
            let unit: string = configObj.unit;
            let remove: string = configObj.remove;
            let handler: string = configObj.handler;
            let destination: string = configObj.destination;
            let dir: string = configObj.dir;
            let connectionString: string = configObj.connectionString;
            
            this.configs[i] = new Config(ext, location, subDirectory,
                unit, remove, handler,
                destination, dir, connectionString);
        }
    }
}