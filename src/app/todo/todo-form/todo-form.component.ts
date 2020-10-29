import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todo :ITodo

  constructor() { }

  ngOnInit(): void {
    this.todo = {
      "title": "This is an example of title",
      "description": "This is an example of description",
      "creationDate": "12/10/2020",
      "dueDate": "24/12/2020"
  }
  }
  onSubmit(){
    this.todo.creationDate = Date.now()
  
  }

}
