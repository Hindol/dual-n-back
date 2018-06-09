import Flash from "./Flash";

class Board {
    private timerToken?: number;
    private onFlash?: (flash: Flash) => void;
    private readonly history: Flash[];

    constructor(
        public readonly rows: number,
        public readonly columns: number
    ) {
        this.history = [];
    }

    public start(onFlash: (flash: Flash) => void) {
        this.onFlash = onFlash;

        // window.setTimeout(() => {
        //     onFlash(this.next());
        // }, 10000);
        this.timerToken = window.setInterval(() => onFlash(this.next()), 2500);
    }

    public stop() {
        clearInterval(this.timerToken);
        delete this.onFlash;
        delete this.timerToken;
    }

    private next() {
        const randomRow = this.randomInRange(0, this.rows - 1);
        const randomColumn = this.randomInRange(0, this.columns - 1);
        const randomSound = this.randomInRange(1, 9);
        const newFlash = new Flash([randomRow, randomColumn], randomSound);
        this.history.push(newFlash);
        return newFlash;
    }

    private randomInRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export default Board;
