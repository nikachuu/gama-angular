import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CepComponent } from './cep/cep.component';
import { CepTextoComponent } from './cep-texto/cep-texto.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BoolPipe } from './bool.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosListComponent },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'cep', component: CepTextoComponent },
  { path: 'cep/:num', component: CepComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    CounterComponent,
    CounterButtonsComponent,
    TodosListComponent,
    HomeComponent,
    CepComponent,
    CepTextoComponent,
    AddTodoComponent,
    BoolPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
