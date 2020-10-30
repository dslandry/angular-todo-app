import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  dueDate:NgbDate

  todo :ITodo ={
    description:"",
    creationDate:"",
    isChecked:false,
    title:"",
    dueDate:""
  }

  @Output() formSubmit:EventEmitter<ITodo> = new EventEmitter<ITodo>()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.todo.creationDate = this.formatDate(new Date(), "dd/mm/yy") 
    this.todo.dueDate  = this.formatNgbDate(this.dueDate, "dd/mm/yy")
    this.formSubmit .emit(this.todo)    
  }

  formatDate(date, format:string) : string{

    return format.replace('mm', date.getMonth() + 1)
    .replace('yy', date.getFullYear())
	  .replace('dd', date.getDate());
  }

  formatNgbDate(date:NgbDate, format: string):string{
    date.month;
    return format.replace('mm',  String(date.month))
    .replace('yy', String(date.year))
	  .replace('dd', String(date.day));
  }

  


}
