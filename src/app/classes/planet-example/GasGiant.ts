import { Planet } from "./Planet";

export default class GasGiant extends Planet { // inheritance
    gases:string[]
    constructor(name:string, size:number, parentStar:string, edit:boolean, gases:string[]) {
        super(name, size, parentStar, edit) 
        this.gases = gases;
    }
    // receive a sample gas mixture - private function


    public get gasList():string{
        return this.gases.join(', ')
    }
}