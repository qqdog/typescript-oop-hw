
export abstract class JsonManager {
    abstract count: number;

    /** return type is object, but giving type any for passing the syntax hint */
    getJsonObject(file: any): any {
        /** get json file and transfer it into object */
        /** 
         * type of file is object
         * transfer file object to string
         * and parse it into an object
         */
        return JSON.parse(JSON.stringify(file));
    }

    abstract processJsonConfig(): void;
}