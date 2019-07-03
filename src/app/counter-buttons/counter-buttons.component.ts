import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  counter = 0;

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todoService.counter.subscribe(value => { this.counter = value; });
  }

}
