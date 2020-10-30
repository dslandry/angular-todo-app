import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit {

  @Input() todo : ITodo

 constructor(private todoService:TodoService){}

 ngOnInit(){}

 checkTodo(id, event){
   this.todoService.changeCheckTodo(id,event.target.checked )
 }
}
