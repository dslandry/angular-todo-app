import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = '../../assets/api/todos.json'

  constructor(private http:HttpClient) { }

  getTodos() : Observable<ITodo[]>{
    return this.http.get<ITodo[]>(this.url)
  }
  addTodo(todo:ITodo) {
    
  }

}
