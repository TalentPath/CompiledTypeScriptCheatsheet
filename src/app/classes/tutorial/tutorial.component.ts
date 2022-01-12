import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  classString:string = `class Planet {
    listOfPlanets:Planet[] = []
    private name:string
  
    constructor(name:string) {
      this.name = name
    }

    displayPlanet():void {
      { add planet to html page }
    }
  }`
  inheriString:string = `class Planet {
    listOfPlanets:Planet[] = []
    private name:string
  
    constructor(name:string) {
      this.name = name
  }

  class GasGiant extends Planet { 
    private gases:string[]
    constructor(name:string) {
        super(name) 
        this.gases = gases
  }`

  publiString:string = `class Planet {
    displayPlanet():void {
      { add planet to html page }
    }
  }

  displayPlanet()`

  proteString:string = `class Planet {
    protected displayPlanet():void {
      { add planet to html page }
    }
  }

  class IceGiant extends Planet {
    public display() {
      this.displayPlanet()
    }
  }`

  privaString:string = `
  class Planet {
    private name:string
    displayPlanet():void {
      { 
        this.name
      }
    }
  }

  let newPlanet = new Planet()
  <strike>planet.name = 'new bad name'</strike>`

  statiString:string = `class Planet {
    public static listOfPlanets:Planet[] = []
    private name:string
  }

  newPlanet = new Planet(name);
  Planet.listOfPlanets.push(newPlanet);`

  getteString:string =`class Planet {
    protected displayPlanet(): void {
      let planet = Planet.listOfPlanets[0]
      let fluids = <IceGiant>planet.fluids
    }
    
  }
  class IceGiant extends Planet {
    private fluidElements:string[];
    constructor(fluidElements:string[]) {
        super() 
        this.fluidElements = fluidElements;
    }

    public get fluids():string{
        return this.fluidElements.join(' , ')
    }`

  setteString:string = `class Planet {
    public static listOfPlanets:Planet[] = []
    private name:string

    protected displayPlanet(): void {
      let newName = (<HTMLInputElement>someElement).value;
      Planet.listOfPlanets[planetIndex].planetName = newName;
    }

    public set planetName(newName:string){
      this.name = newName;
    }
  }`

  bigString:string = `class Planet {
    public static listOfPlanets:Planet[] = []
    private name: string

    constructor(name:string) {
      this.name = name
    }

    protected displayPlanet(): void {
      let planet = Planet.listOfPlanets[0]
      let fluids = <IceGiant>planet.fluids

      let newName = (<HTMLInputElement>someElement).value;
      Planet.listOfPlanets[planetIndex].planetName = newName;
    }

    public set planetName(newName:string){
      this.name = newName;
    }
  }

  class IceGiant extends Planet {
    fluidElements:string[];
    constructor(fluidElements:string[]) {
        super() 
        this.fluidElements = fluidElements;
    }

    public display() {
      this.displayPlanet()
    }

    public get fluids():string{
        return this.fluidElements.join(' , ')
    }
  }

  function createNewPlanet (name:string): void {
    let newPlanet = new IceGiant(name);
    Planet.listOfPlanets.push(newPlanet);
    (<IceGiant>newPlanet).display();
  }`

  chainString:string = `class numbOp {
    private n:number;
    constructor(num:number) {
        this.n = num;
    }

    public add(inc:number = 1):this
        this.n = this.n + inc;
        return this;
    }
    toString() { 
        return this.n;
    }
  }

  let finalNumber = new numbOp(3).add().add(2).toString();
  console.log(finalNumber) // Output: "6"`

}
