import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BoolPipe } from './bool.pipe';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TodosListComponent },
  { path: 'add', component: AddTodoComponent }
];

@NgModule({
  declarations: [
    TodoItemComponent,
    TodosListComponent,
    AddTodoComponent,
    BoolPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
