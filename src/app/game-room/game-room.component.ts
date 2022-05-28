import { Component, OnInit } from '@angular/core';
import { BattleShipGameHotSeats } from '../BattleShipGame/BattleShipGameHotSeats';
import { Ship } from '../BattleShipGame/models/Ship';
import { Shoot } from '../BattleShipGame/models/Shoot';
import { RandomPlacedShipStrategy } from '../BattleShipGame/strategies/RandomPlacedShipsStrategy';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.css']
})
export class GameRoomComponent implements OnInit {

  game: BattleShipGameHotSeats;  
  ships: Ship[] = [];
  leftShoots: Shoot[] = [];
  rightShoots: Shoot[] = [];

  constructor() {
    
    this.game = new BattleShipGameHotSeats(new RandomPlacedShipStrategy);  
   }
  

  ngOnInit(): void {
    this.game.start();  
    this.ships = this.game.getShips();
    this.leftShoots = this.game.getLeftBoardShoots();
    this.rightShoots = this.game.getRightBoardShoots();
  }

  onMove(evt: MouseEvent) {
    let svg = <any>document.getElementById("svgBoard");
    let point: SVGPoint = svg.createSVGPoint();

    point.x = evt.clientX;
    point.y = evt.clientY;    
    var cursorpt =  point.matrixTransform(svg.getScreenCTM().inverse());    

    this.game.onMove(Math.floor(cursorpt.x), Math.floor(cursorpt.y));
    
    if(this.game.isGameOver() != "") {
      let container = document.getElementById("container");
      if(container != null) {
        container.innerHTML = `<div>Player: ${this.game.isGameOver()} loses</div>`;
      }      
    }

    this.ships = this.game.getShips(); 
    this.leftShoots = this.game.getLeftBoardShoots();
    this.rightShoots = this.game.getRightBoardShoots();

  }
}
