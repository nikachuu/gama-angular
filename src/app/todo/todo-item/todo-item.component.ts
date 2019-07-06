import { Router } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/todo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() data: Todo;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private router: Router) {  }

  ngOnInit() {
  }

  editarTodo() {
    this.router.navigateByUrl(`/todos/${this.data.id}`);
  }

  deletarTodo() {
    this.deleteEvent.emit(this.data.id);
  }
}
