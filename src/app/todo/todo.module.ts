import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListElementComponent } from './todo-list-element/todo-list-element.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';



@NgModule({
  declarations: [TodoListComponent, TodoListElementComponent, TodoFormComponent],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
})
export class TodoModule { }
