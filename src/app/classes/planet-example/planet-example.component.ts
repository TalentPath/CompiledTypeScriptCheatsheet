import { Component, OnInit } from '@angular/core';
import { Planet } from './Planet';
import { RockyInfo, IceInfo, GasInfo, Info } from './interfaces'
import GasGiant from "./GasGiant.js";
import IceGiant from "./IceGiant.js";
import RockyPlanet from "./RockyPlanet.js";

@Component({
  selector: 'app-planet-example',
  templateUrl: './planet-example.component.html',
  styleUrls: ['./planet-example.component.css']
})
export class PlanetExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  edit:boolean = false;
  fakePlanet: Planet = new Planet('Earth', 2000, 'Sol', false);
  showPlanetInfo:boolean = false
  planetType:string = 'none'
  elements:string[] = []
  public listOfPlanets: Planet[] = [new RockyPlanet('Earth', 2000, 'Sol', false, ['Iron', 'Nickel'])]
  // @ViewChild('planetName') inputName;
  

  addPlanet(name:string, type:string, info:Info):void{
    let newPlanet:Planet

    if (type === 'rocky') {
      newPlanet = new RockyPlanet(name, info.size, info.parentStar, false, (<RockyInfo>info).coreComponents);
        this.listOfPlanets.push(newPlanet);
    }

    if (type === 'gas') {
      newPlanet = new GasGiant(name, info.size, info.parentStar, false, (<GasInfo>info).gases);
        this.listOfPlanets.push(newPlanet);
    }

    if (type === 'ice') {
      newPlanet = new IceGiant(name, info.size, info.parentStar, false, (<IceInfo>info).fluidElements);
        this.listOfPlanets.push(newPlanet);
    }

    this.showPlanetInfo = false
    this.planetType = 'none'
    this.elements = []
    // this.inputName.nativeElement.value = ''
  }

  editMode(index:number){
    this.listOfPlanets[index].edit = !this.listOfPlanets[index].edit
  }

  editName(index:number, newName:string){
    this.listOfPlanets[index].newName = newName;
    this.editMode(index);
  }

  displayInput(password:string) {
    if (password === '') {
      this.showPlanetInfo = true
    }
  }

  displayElements(type:string): void {
    this.elements = []
    this.planetType = type
  }

  addElement(element:string) {
    if (this.elements.includes(element)) {
      let index = this.elements.indexOf(element)
      this.elements.splice(index, 1)
    } else {
      this.elements.push(element)
    }
  }

  convertStringToNumber(input: string) { 
    if (input.trim().length==0) { 
        return NaN;
    }
    return Number(input);
}
  returnType(index:number):string{
    if(this.listOfPlanets[index] instanceof RockyPlanet){
      return 'rocky';
    }
    else if(this.listOfPlanets[index] instanceof GasGiant)
      return 'gas';
    else if(this.listOfPlanets[index] instanceof IceGiant)
      return 'ice'
    return 'planet'
  }

  returnElements(planet:Planet|RockyPlanet|IceGiant|GasGiant):string{
    if(planet instanceof RockyPlanet)
      return planet.coreComp;
    else if(planet instanceof GasGiant)
      return planet.gasList;
    else if(planet instanceof IceGiant)
      return planet.fluids
    return ''
  }

}
