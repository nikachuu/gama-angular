import { AuthService } from './../../auth/auth.service';
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

  todos: Todo[] = []; // async todo vem aqui e adiciona o async pipe no HTML

  constructor(private todoService: TodoService, private authService: AuthService) { }

  ngOnInit() {
    // this.todoService.getTodos().subscribe(value => {
    //   console.log(value);
    //   this.todos = value;
    // });
    this.authService.currentUser.subscribe(user => {
     this.todoService.getTodos(user.id).subscribe(todos => {
       this.todos = todos;
     });
    });
  }

  onDeleteTodo(id) {
    this.todoService.deleteTodo(id)
      .subscribe(value => {
        alert('Todo apagado com sucesso.');
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }

}
