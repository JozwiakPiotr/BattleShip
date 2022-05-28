import { Ship } from "./Ship";
import { Shoot } from "./Shoot";

export class Player {
    ships: Ship[] = [];
    shoots: Shoot[] = [];

    constructor(public name: string) {
        
    }
}