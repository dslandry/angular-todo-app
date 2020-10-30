import { Component, OnInit, ViewChild } from '@angular/core';
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

  filterString:string ="" 
  sortDirection:string ="most-urgent"
  todos$ : Observable<ITodo[]> = this.todoService.todos$

  

  constructor(private todoService: TodoService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // if the modal is closed successfully
      if ( result instanceof String){
        // closed manually
      }
      else{
        // form submitted, call the service.
        this.todoService.addTodo(result).subscribe(
          (value)=>{
            console.log(value)
          },
          (err)=>{
            console.log(err);
          }
        )
      }   
    }, (reason) => {
      //  if the modal cannot be closed successfully
      console.log(reason);
    });

  }

  isChecked(value:ITodo){
    return value.isChecked
  }
  clearChecked(){
    this.todoService.clearCheckedItems()
  }

}
