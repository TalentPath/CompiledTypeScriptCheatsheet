import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { complexType } from './ts/complexType';
import { primitives } from './ts/primitives';
import { tuples } from './ts/tuples';
import { typeAliases } from './ts/typeAliases';
import { typeInference } from './ts/typeInference';
import { union } from './ts/union';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  currentText:string = "Click here, press enter";
  @ViewChild("textarea") text!: ElementRef;
  text_area!:HTMLTextAreaElement; 
  arr: string[] = [];
  index: number = 0;

terminal: { text_area: HTMLTextAreaElement, arr: string[], index: number } = { text_area: this.text_area, arr: this.arr, index: this.index };
  constructor() {
    
   }
ngOnInit():void{

}

ngAfterViewInit(): void {
    this.text_area = this.text.nativeElement;    
    this.terminal.text_area = this.text_area;
    this.initTerminal();
  }
  

terminalClick(textarea:HTMLTextAreaElement){
  
  this.terminal.index = (this.terminal.index + 1 === this.terminal.arr.length) ? 0 : this.terminal.index + 1;

  this.currentText = this.terminal.arr[this.terminal.index];
  
  // if(!this.text_area){
  //   this.text_area = textarea;
  //   this.terminal.text_area = textarea
  //   this.initTerminal();
  // }

}
initTerminal() {
      primitives(this.terminal);
      tuples(this.terminal);
      complexType(this.terminal);
      typeAliases(this.terminal);
      typeInference(this.terminal);
      union(this.terminal);
  
}
myFunction(slide:HTMLElement,slideA:HTMLElement){
  slide.style.display = "none";
  slideA.style.display= "block";
  

}

}
