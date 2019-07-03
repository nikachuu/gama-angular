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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosListComponent },
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
    CepComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
