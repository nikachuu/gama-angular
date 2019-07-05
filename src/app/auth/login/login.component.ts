import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email, this.senha);
    this.authService.login(this.email, this.senha).subscribe(
      (value: any) => {
        alert('Login efetuado com sucesso!');
        console.log(value);
        localStorage.setItem('token', value.idToken);
        this.authService.setUser({ email: value.email });
      },
      error => {
        console.log(error);
        switch (error.error.error.message) {
          case 'EMAIL_NOT_FOUND':
            alert('Email não encontrado!');
            break;
          case 'INVALID_EMAIL':
            alert('Email inválido!');
            break;
          case 'INVALID_PASSWORD':
            alert('Senha inválida');
            break;
          default:
            alert('Deu merda ai fio!');
            break;
        }
      }
    );
  }
}
