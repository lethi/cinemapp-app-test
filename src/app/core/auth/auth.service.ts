import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly tokenKey = 'access_token';
  token: string | null = null;
  isConnect = new ReplaySubject<boolean>(1);

  constructor() {

    this.token = localStorage.getItem(this.tokenKey);

    this.isConnect.next(this.token ? true : false);

  }

  connect(token: string) {

    this.isConnect.next(true);

    this.token = token;

    localStorage.setItem(this.tokenKey, token);

  }

  disconnect() {

    this.isConnect.next(false);

    this.token = null;

    localStorage.removeItem(this.tokenKey);

  }
}
