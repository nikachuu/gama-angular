import { AuthGuard } from './auth/auth.guard';
import { CepModule } from './cep/cep.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'todos', component: TodosListComponent },
  // { path: 'todos/add', component: AddTodoComponent },
  // sintaxe antes do angular 8 { path: 'todos', loadChildren: './todo/todo.module.ts#TodoModule'}
  { path: 'todos', canActivate: [AuthGuard], loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
  { path: 'cep', loadChildren: () => import('./cep/cep.module').then(m => m.CepModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    HomeComponent
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
