import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import { map } from 'rxjs/operators';


@Injectable()
export class UsersService {

  constructor(private  http: HttpClient) {}

  getUserByEmail(email: String): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users?email=${email}')
      .pipe(
        map(response => {
          return response;
        }),
        map((user: User) => {
          return user ? user : undefined;
        }));


  }
}
