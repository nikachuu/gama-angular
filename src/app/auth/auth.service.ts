import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_KEY = 'AIzaSyAI1lOcAljiwtmDHmBcVkoZyoXL0JdZqEA';
  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }


  createAccount(email, password) {
// tslint:disable-next-line: max-line-length
    return this.httpClient.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${this.API_KEY}`, {
      email,
      password
    });
  }

// tslint:disable-next-line: adjacent-overload-signatures
  login(email, password) {
// tslint:disable-next-line: max-line-length
    return this.httpClient.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${
        this.API_KEY
      }`, {
      email,
      password
    });
  }
  verifyToken(token) {
    const body = { idToken: token };
    return this.httpClient.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=${
        this.API_KEY
      }`,
      body
    );
  }

  setUser(user) {
    this.pUser.next(user);
  }

  logout() {
    localStorage.clear();
    this.setUser(null);
  }
}
