import { Planet } from "./Planet";

export default class IceGiant extends Planet {
    fluidElements:string[];
    constructor(name:string, size:number, parentStar:string, edit:boolean, fluidElements:string[]) {
        super(name, size, parentStar, edit) 
        this.fluidElements = fluidElements;
    }

    public get fluids():string{
        return this.fluidElements.join(', ')
    }
}