import { Ship } from "./models/Ship";
import { Shoot } from "./models/Shoot";

export abstract class BattleShipGame {
    abstract name: string
    abstract boardWidth: number;
    abstract boardHeight: number;

    leftBoardShoots: Shoot[] = [];
    rightBoardShoots: Shoot[] = [];

    constructor() {
        
    }

    abstract start(): void;
    abstract onMove(x: number, y: number): void;
    abstract endGame(message: string): void;
    abstract getShips(): Ship[];
    abstract getLeftBoardShoots(): Shoot[];
    abstract getRightBoardShoots(): Shoot[];
}