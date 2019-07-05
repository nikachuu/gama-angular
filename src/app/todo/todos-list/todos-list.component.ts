import { Todo } from 'src/typings/todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  // todos: Todo[] = [];

  todos$: Observable<Todo[]>; // async todo vem aqui e adiciona o async pipe no HTML

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos$ = this.todoService.getTodos();
    // this.todoService.getTodos().subscribe(value => {
    //   console.log(value);
    //   this.todos = value;
    // });
  }

}
