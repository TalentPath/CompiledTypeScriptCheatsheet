import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.css']
})
export class GenericsComponent implements OnInit {

  
  numArray: number[] = []
  strArray: string[] = [];

  showNumRes:boolean = false;
  showStrRes:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  lastItem<T>(arr: T[]):T {
    return arr[arr.length - 1];
  }

  addToNumArr(a:string,b:string,c:string,d:string,e:string,$event:Event){
    $event.preventDefault();
    this.numArray.push(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e))
    this.showNumRes = true;
    console.log(this.numArray);
  }

  addToStrArr(a:string,b:string,c:string,d:string,e:string, $event:Event){
      $event.preventDefault();
      this.strArray.push(a,b,c,d,e);
      this.showStrRes = true;
      console.log(this.strArray);
  }


}
