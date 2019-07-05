import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/todo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    date: ''
  };


  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  enviarTodo() {
    console.log(this.todo);
    this.todoService.adicionarTodo(this.todo).subscribe(() => {
      alert('Todo adicionado com sucesso!');
      this.router.navigateByUrl('/todos');
    });
  }

}
