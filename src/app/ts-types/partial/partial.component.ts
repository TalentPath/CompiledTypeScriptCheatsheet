import { Component, OnInit } from '@angular/core';
import { Voter, VoterFunc } from './voter-type';

@Component({
  selector: 'app-partial',
  templateUrl: './partial.component.html',
  styleUrls: ['./partial.component.css']
})
export class PartialComponent implements OnInit {

  option:string = 'Partial';
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
    
    if (this.option === 'Required') {
      if (this.voterKeys.length === 3 
          && this.voterKeys.indexOf('name') !== -1
          && this.voterKeys.indexOf('age') !== -1
          && this.voterKeys.indexOf('registered') !== -1
          && typeof this.voterObj.name === 'string'
          && typeof this.voterObj.age === 'number' 
          && typeof this.voterObj.registered === 'boolean') {
          this.success = true;
          
          const newVoter: Voter = this.voterObj as Voter;
          this.addVoter(newVoter, this.voters);

          this.voterObj = {};
          this.voterKeys = [];
          this.voterValues = [];
      } else {
          this.wrong = true;
      }   
  } else {
      if (!this.voterKeys.some(key => key !== 'name' && key !== 'age' && key !== 'registered')
          && this.voterKeys.map(key => {
              if (key === 'name' && typeof this.voterObj[key] !== 'string') {
                  return false;
              }
              if (key === 'age' && typeof this.voterObj[key] !== 'number') {
                  return false;
              }
              if (key === 'registered' && typeof this.voterObj[key] !== 'boolean') {
                  return false;
              }
              return true;
          }).every(item => item === true)) {
              this.success = true;
            
              const newVoter: Voter = this.voterObj as Voter;
              this.addVoter(newVoter, this.voters);
            
              this.voterObj = {};
              this.voterKeys = [];
              this.voterValues = [];
      } else {
          this.wrong = true;
      }
  }
  this.active = true;
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
