import { Component, OnInit } from '@angular/core';
import { MealOrder } from './mealorderInterface';

@Component({
  selector: 'app-keyof',
  templateUrl: './keyof.component.html',
  styleUrls: ['./keyof.component.css']
})
export class KeyofComponent implements OnInit {

 
  displayRes:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  myOrder: MealOrder = {
    starter: 'salad',
    entre: 'pasta',
    drink: 'pepsi',
    dessert: 'ice cream'
  }

  changeMenu(order: MealOrder, orderEntry: keyof MealOrder, change: string) {
    order[orderEntry] = change;
    this.displayRes = true;
  }

  menuSwitch(orderItem: string, newItem: string, $event: Event) {
    $event.preventDefault();
    switch (orderItem) {
      case 'starter':
        this.changeMenu(this.myOrder, orderItem, newItem);
        break;
      case 'entre':
        this.changeMenu(this.myOrder, orderItem, newItem);
        break;
      case 'drink':
        this.changeMenu(this.myOrder, orderItem, newItem);
        break;
      case 'dessert':
        this.changeMenu(this.myOrder, orderItem, newItem);
        break;
    }
    console.log(`myOrder now consists of : 

    starter: ${this.myOrder.starter};
    entre: ${this.myOrder.entre};
    drink: ${this.myOrder.drink};
    dessert: ${this.myOrder.dessert};`)
  }
}
