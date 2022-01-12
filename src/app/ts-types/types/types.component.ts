import { Component, OnInit } from '@angular/core';
import { Voter, VoterFunc } from './voter-type';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  voters: Voter[] = [];
  voterObj: Partial<Voter> = {};
  voterKeys: string[] = [];
  voterValues: (string | number | boolean)[] = [];
  success: boolean = false;
  wrong: boolean = false;
  active: boolean = false;
  submit: boolean = true;

  constructor() { }

  addVoter: VoterFunc = (voter: Voter, voters: Voter[]) => {
    this.voters.unshift(voter);
  }

  addProperty(property: string, value: string, $event?: Event) {
    $event?.preventDefault();

    if (Object.keys(this.voterObj).indexOf(property) === -1) {
      let currentValue = /^\d+$/.test(value) ? Number(value) : value === 'true' ? true : value === 'false' ? false : value;

      Object.defineProperty(this.voterObj, `${property}`, {value: currentValue});

      this.voterKeys.push(property);
      this.voterValues.push(currentValue)
    }
    this.active = true;
  }

  checkAnswer($event: Event) {
    $event.preventDefault();
    if (this.voterKeys.length === 3 
        && this.voterKeys.indexOf('name') !== -1
        && this.voterKeys.indexOf('age') !== -1
        && this.voterKeys.indexOf('registered') !== -1
        && typeof this.voterObj.name === 'string'
        && typeof this.voterObj.age === 'number' 
        && typeof this.voterObj.registered === 'boolean') {
        this.success = true;
        const newTodo: Voter = this.voterObj as Voter;
        this.addVoter(newTodo, this.voters);
        this.voterObj = {};
    } else {
      this.wrong = true;
    }   
    this.submit = false;
  }

    

  reset($event?: Event) {
    $event?.preventDefault();
    
    this.submit = true;
    this.success = false;
    this.wrong = false;
    this.active = false;
    this.voterObj = {};
    this.voterKeys = [];
    this.voterValues = [];
  } 
  ngOnInit(): void {
  }

}
