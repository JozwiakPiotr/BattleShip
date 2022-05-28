export class Shoot {
    constructor(public x: number, public y: number, public hit: boolean) {

    }

    getClass() : string {
        if(this.hit) {
            return "hit";
        }
        else {
            return "missed";
        }
    }

    getTransition(): string {
        let transitionX = this.x * 100;
        let transitionY = this.y * 100;

        return `transform: translate(${transitionX}%, ${transitionY}%);`
    }
}