export class Ship {
    private hits: number;
    isDead: boolean;

    constructor(public x: number, public y: number,
         public width: number, public height: number) {
        this.hits = 0;
        this.isDead = false;
    }

    addHit(): void {
        if(this.isDead) {
            return;
        }

        this.hits++;
        console.log("siema")
        console.log(this.hits)
        let length = this.width > this.height ? this.width : this.height;

        if(this.hits >= length) {
            this.isDead = true;
        }

    }

    rotate(): void {
        [this.width, this.height] = [this.height, this.width];
    }

    getPositions(): {x:number, y:number}[] {
        let positions = [
            {x: this.x, y: this.y}
        ];

        for(let i = 1; i < this.height; i++) {
            positions.push({x:this.x, y:this.y + i})
        }

        for(let i = 1; i < this.width; i++) {
            positions.push({x:this.x + i, y:this.y})
        }

        return positions;
    }

    getClass() : string {
        if(this.width > this.height) {
            switch(this.width) {
                case 4: return "ship width-4";
                case 3: return "ship width-3";
                default: return "ship width-2";
            }
        }
        else {
            switch(this.height) {
                case 4: return "ship height-4";
                case 3: return "ship height-3";
                default: return "ship height-2";
            }
        }
    }

    getTransition(): string {
        let transitionX = this.x * 100 / this.width;
        let transitionY = this.y * 100 / this.height;

        return `transform: translate(${transitionX}%, ${transitionY}%);`
    }
}