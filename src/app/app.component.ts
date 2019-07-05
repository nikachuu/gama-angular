import { Component, OnInit } from '@angular/core';
import { map, debounceTime } from 'rxjs/operators';
import { TodoService } from './todo/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  counter = 0;

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todoService.counter
      // modificar valor antes de dar subscribe
      .pipe(
        map(value => value * 2), debounceTime(2000)
      )
      .subscribe(value => { this.counter = value; });
  }
}
