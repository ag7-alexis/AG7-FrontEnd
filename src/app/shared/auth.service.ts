import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(myUsername, myPassword): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username: myUsername,
      password: myPassword
    }, httpOptions);
  }
}
