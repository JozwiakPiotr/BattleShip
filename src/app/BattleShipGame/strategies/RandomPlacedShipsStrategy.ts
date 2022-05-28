import { Injectable } from "@angular/core";
import { Ship } from "../models/Ship";

@Injectable ({
    providedIn: 'root'
})
export class RandomPlacedShipStrategy {
    placeShips(ships: Ship[], boardWidth: number, boardHeight: number) : Ship[] {
        
        let placedShips: Ship[] = [];

        for(var newShip of ships) {
            if(Math.random() > 0.5) {
                newShip.rotate();
            }
            let placed = false;
            
            while(!placed) {
                
                newShip.x = Math.floor(Math.random() * (boardWidth - newShip.width));
                newShip.y = Math.floor(Math.random() * (boardHeight - newShip.height));
                placed = true;                 

                for(let ship of placedShips) {

                    let intersection: {W: number, H: number} = this.intersection(ship, newShip);
                    
                    if(intersection.H > 0 && intersection.W > 0) {
                        
                        placed = false;
                        break;
                    }                    
                }    
                
                if (placed == true) {
                    placedShips.push(newShip)
                }
                         
            }

        }
        
        return ships;
    }

    intersection(s1:Ship, s2: Ship) : {W: number, H: number}{
             let intersection: {W: number, H: number} = {W: 0, H: 0};
            if(s1.x == s2.x) {
                intersection.W = s1.width < s2.width ? s1.width : s2.width;
            }
            else if(s1.x < s2.x) {
                intersection.W = s1.width - s2.x + s1.x;
            }
            else {
                intersection.W = s2.width - s1.x + s2.x;
            }

            if(s1.y == s2.y) {
                intersection.H = s1.height < s2.height ? s1.height : s2.height;
            }
            else if(s1.y < s2.y) {
                intersection.H = s1.height - s2.y + s1.y;
            }
            else {
                intersection.H = s2.height - s1.y + s2.y;
            }
            
            return intersection;
    }
}
