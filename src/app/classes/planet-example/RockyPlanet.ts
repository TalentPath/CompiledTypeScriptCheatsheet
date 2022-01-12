import { Planet } from "./Planet";

export default class RockyPlanet extends Planet {
    private coreComponents:string[]
    constructor(name:string, size:number, parentStar:string, edit:boolean, coreComponents:string[]) {
        super(name, size, parentStar, edit) 
        this.coreComponents = coreComponents;
    }

    public get coreComp():string{
        return this.coreComponents.join(', ')
    }
}
