import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/typings/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private privCounter = new BehaviorSubject(0); // assiste e emite evento
  counter = this.privCounter.asObservable();

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
  }

  adicionarTodo(todo: Todo) {
    return this.httpClient.post('http://localhost:3000/todos', todo);
  }

  incrementCounter() {
    this.privCounter.next(this.privCounter.value + 1);
  }

  decrementCounter() {
    this.privCounter.next(this.privCounter.value - 1);
  }
}
