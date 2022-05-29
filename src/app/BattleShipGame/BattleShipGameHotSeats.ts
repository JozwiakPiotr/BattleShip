import { BattleShipGame } from "./BattleShipGame";
import { Player } from "./models/Player";
import { Ship } from "./models/Ship";
import { Shoot } from "./models/Shoot";
import { another } from "./strategies/another";
import { RandomPlacedShipStrategy } from "./strategies/RandomPlacedShipsStrategy";

export class BattleShipGameHotSeats extends BattleShipGame {
   
    name: string = "BattleShipHotSeats";
    boardWidth: number = 10;
    boardHeight: number = 10;
    
    currentPlayer = new Player("firstPlayer");
    nextPlayer = new Player("secondPlayer");

    constructor(private placedShipStrategy: RandomPlacedShipStrategy) {
        super();
        
    }

    start(): void {
        //this.setCurrentPlayer();

        this.placeShips();
        
    }
    onMove(x: number, y: number): void {

        if(this.nextPlayer.ships.length <= 0) {
            let shipsStarter = this.getShipsStarter()
            this.nextPlayer.ships = this.placedShipStrategy.placeShips(shipsStarter, this.boardWidth, this.boardHeight)
        }

        this.makeShoot(x,y);

        let message = this.isGameOver();
        if(message != "") {
            console.log("endgame")
            this.endGame(message);
            return;
        }
        
        this.switchPlayer();
        
    }
    endGame(message: string): void {
        
    }

    setShoots(): void {
        this.leftBoardShoots = this.nextPlayer.shoots;
        this.rightBoardShoots = this.currentPlayer.shoots;
    }

    getShipsStarter(): Ship[] {
        return [
            new Ship(0, 0, 1, 2),
            new Ship(0, 0, 1, 2),
            new Ship(0, 0, 1, 3),
            new Ship(0, 0, 1, 4),
        ]
    }

    placeShips(): void {
        let shipsStarter = this.getShipsStarter()        
        
        this.currentPlayer.ships = this.placedShipStrategy.placeShips(shipsStarter, this.boardWidth, this.boardHeight);
    }

    getShips(): Ship[] {
        return this.currentPlayer.ships;
    }

     switchPlayer(): void {
         let temp = this.currentPlayer;
         this.currentPlayer = this.nextPlayer;
         this.nextPlayer = temp;
     }

    getLeftBoardShoots(): Shoot[] {
        return this.nextPlayer.shoots;
    }
    getRightBoardShoots(): Shoot[] {
        return this.currentPlayer.shoots;
    }

    makeShoot(x: number, y: number): void {
        let shoot: Shoot = new Shoot(x, y, false);
        for(let ship of this.nextPlayer.ships) {
            
            for(let position of ship.getPositions()) {
                
                if(position.x == x && position.y == y) {
                    ship.addHit;
                    shoot.hit = true;
                    break;
                }
            }
        }
        this.currentPlayer.shoots.push(shoot);
    }

    

    isGameOver(): string {
        
        if(this.nextPlayer.ships.every(s => s.isDead)) {
            return this.nextPlayer.name;
        }         
        return "";
    }
}
