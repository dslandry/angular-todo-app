import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit {

  @Input() todo : ITodo


 constructor(){}

 ngOnInit(){}

}
