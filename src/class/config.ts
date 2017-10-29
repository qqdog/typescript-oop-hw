export class Config {
    readonly ext: string;
    readonly rext: string;
    readonly location: string;
    readonly subDirectory: string;
    readonly unit: string;
    readonly remove: string;
    readonly handler: string;
    readonly destination: string;
    readonly dir: string;
    readonly connectionString: string;

    constructor(ext: string, location: string, subDirectory: string, 
        unit: string, remove: string, handler: string, 
        destination: string, dir: string, connectionString: string)
    {
        this.ext = ext;
        this.location = location;
        this.subDirectory = subDirectory;
        this.unit = unit;
        this.remove = remove;
        this.handler = handler;
        this.destination = destination;
        this.dir = dir;
        this.connectionString = connectionString;
    }
}