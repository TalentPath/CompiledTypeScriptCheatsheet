import { Component, OnInit } from '@angular/core';
import { Todo, TodoFunc } from './todo-interface';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit {

  todos: Todo[] = [];
  todoObj: Partial<Todo> = {};
  todoKeys: string[] = [];
  todoValues: (string | number)[] = [];
  success: boolean = false;
  wrong: boolean = false;
  active: boolean = false;
  submit: boolean = true;

  constructor() { }

  addTodo: TodoFunc = (todo: Todo, todos: Todo[]) => {
    this.todos.unshift(todo);
  }

  addProperty(property: string, value: string, $event?: Event) {
    $event?.preventDefault();

    if (Object.keys(this.todoObj).indexOf(property) === -1) {
      let currentValue = /^\d+$/.test(value) ? Number(value) : value;

      Object.defineProperty(this.todoObj, `${property}`, {value: currentValue});

      this.todoKeys.push(property);
      this.todoValues.push(currentValue)
    }
    this.active = true;
  }

  checkAnswer($event: Event) {
    $event.preventDefault();
    if (this.todoKeys.length === 3 
        && this.todoKeys.indexOf('name') !== -1
        && this.todoKeys.indexOf('description') !== -1
        && this.todoKeys.indexOf('daysToComplete') !== -1
        && typeof this.todoObj.name === 'string'
        && typeof this.todoObj.description === 'string' 
        && typeof this.todoObj.daysToComplete === 'number') {
        this.success = true;
        const newTodo: Todo = this.todoObj as Todo;
        this.addTodo(newTodo, this.todos);
        this.todoObj = {};
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
    this.todoObj = {};
    this.todoKeys = [];
    this.todoValues = [];
  } 

  ngOnInit(): void {
  }

}
