import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ITodo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$ : Observable<ITodo[]>

  constructor(private todoService: TodoService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos()
  }

  openModal(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // if the modal is closed successfully
      console.log(result);
      
    }, (reason) => {
      //  if the modal cannot be closed successfully
      console.log(reason);
    });

  }
  

}
