
import { Ship } from "../models/Ship";


export class another {
    placeShips(ships: Ship[], boardWidth: number, boardHeight: number) : Ship[] {

        for(var newShip of ships) {
            if(Math.random() > 0.5) {
                newShip.rotate();
            }
            let placed = false;
            
            while(!placed) {
                
                newShip.x = Math.floor(Math.random() * (boardWidth - newShip.width));
                newShip.y = Math.floor(Math.random() * (boardHeight - newShip.height));
                placed = true;

                 

                for(let ship of ships) {
                    let intersection: {W: number, H: number} = 
                        this.intersection(ship, newShip);
                        
                    if(intersection.H > 0 && intersection.W > 0) {
                        console.log(intersection);
                        placed = false;
                        break;
                    }                    
                }              
            }

        }
        
        return ships;
    }

    intersection(s1:Ship, s2: Ship) : {W: number, H: number}{
             let intersection: {W: number, H: number} = {W: 0, H: 0};
            if(s1.x < s2.x) {
                intersection.W = s1.width - s2.x + s1.x;
            }
            else {
                intersection.W = s2.width - s1.x + s2.x;
            }
            if(s1.y < s2.y) {
                intersection.W = s1.height - s2.y + s1.y;
            }
            else {
                intersection.W = s2.height - s1.y + s2.y;
            }
            
            return intersection;
    }
}
