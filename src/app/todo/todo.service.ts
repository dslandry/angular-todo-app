import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from './todo';

@Injectable({
  providedIn: 'root'
})
/**
   * This acts at the same time as a mock service for http calls and a store for the todo module 
  */
export class TodoService {
  
  private url = '../../assets/api/todos.json'
  private todosSubject$ : BehaviorSubject<ITodo[]> = new BehaviorSubject<ITodo[]>([])

  get todos$()  : Observable<ITodo[]> {
    return this.todosSubject$.asObservable()
  }


  
  constructor(private http:HttpClient) {
    // loading the initial data
    this.getTodos().subscribe((result=>{
      // output the next value into the behaviour subject store
      this.todosSubject$.next(result)
    }))
  }

  private getTodos() : Observable<ITodo[]>{
    return this.http.get<ITodo[]>(this.url).pipe()
  }

  addTodo(todo:ITodo): Observable<string> {
    let obs=new Observable<string>(observer=>{
      // simulate completion of http call
      observer.next("complete")
      observer.complete()
    })
    obs.subscribe((result)=>{
      // successfull addition of the todo
      let nextId = Math.max(...this.todosSubject$.getValue().map(val=>val.id))+1
      this.todosSubject$.next(this.todosSubject$.getValue().concat([{...todo, id:nextId}]))
    })

    return obs;
  }

  changeCheckTodo(todoId:number,isChecked:boolean){
    this.todosSubject$.next(this.todosSubject$.getValue().map(
      (val)=>val.id===todoId? {...val,isChecked:isChecked } : val
    ))
  }

  clearCheckedItems(){
    this.todosSubject$.next(this.todosSubject$.getValue().filter(val=> val.isChecked===false))
  }
}
