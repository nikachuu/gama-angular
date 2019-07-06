import { AuthService } from './../../auth/auth.service';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/todo';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  email = '';
  todo: Todo = {
    id: null,
    title: '',
    description: '',
    finished: false,
    date: '',
    userId: ''
  };

  isEditting = false;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.isEditting = true;
        this.todoService.getTodoById(params.id).subscribe((todo: Todo) => {
          this.todo = todo;
        });
      }
    });

    this.authService.currentUser.subscribe((user) => {
      this.todo.userId = user.id;
    });
  }

  enviarTodo() {

    if ( this.isEditting ) {
      console.log(this.todo);
      this.todoService.updateTodo(this.todo.id, this.todo).subscribe(() => {
        alert('Todo atualizado com sucesso!');
        this.router.navigateByUrl('/todos');
      });
    } else {
      console.log(this.todo);
      this.todoService.adicionarTodo(this.todo).subscribe(() => {
        alert('Todo adicionado com sucesso!');
        this.router.navigateByUrl('/todos');
      });
    }
  }
}
