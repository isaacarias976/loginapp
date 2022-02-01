import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

  private url : string = "https://isaac-spring-admin.herokuapp.com/user/auth";
  constructor( private http:HttpClient) { }

  auth(post:User):Observable<User>{
    return this.http.post<User>(this.url,post);
  }

}
