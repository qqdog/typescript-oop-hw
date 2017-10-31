
export class JsonManager {
    getJsonObject(file: any): string {
        /** get json file and transfer it into object */
        /** 
         * typeof file is object
         * file object to string
         */
        return JSON.stringify(file);
    }

    processJsonConfig() {
        /**common place(process) between configManager and scheduleManager */
    }
}