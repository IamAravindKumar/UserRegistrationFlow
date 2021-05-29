import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  }

  constructor(private http: HttpClient) { }

  postUser(user: User) {
    const url = `${environment.apiBaseUrl}/register`;
    return this.http.post(url,user);
  }
}
