export class Schedule {
    readonly ext: string;
    readonly interval: string;
    readonly time: string;

    constructor(ext: string, interval: string, time: string)
    {
        this.ext = ext;
        this.interval = interval;
        this.time = time;
    }
}