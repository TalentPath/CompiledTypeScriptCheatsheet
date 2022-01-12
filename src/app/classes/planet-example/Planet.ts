export class Planet{
    public static inventoryCount: number = 2000000000
    public static purchasedPlanets: string[] = []

    private name: string
    size: number
    parentStar: string
    public edit:boolean

    constructor(name: string, size: number, parentStar: string, edit:boolean) {
        this.name = name
        this.size = size
        this.parentStar = parentStar
        this.edit = edit;
    }

    public get planetName():string {
        return this.name
    }

    public set newName(newValue:string){
        this.name = newValue;
    }
}