import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {Authen} from "./authen";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthenServiceService {
  constructor(private http: HttpClient) {
  }
  login(authen:Authen): Observable<any>{
    return this.http.post('http://localhost:8000/api/login',authen)
  }
 register(user:User):Observable<any>{
    return this.http.post('http://localhost:8000/api/user/add',user);
 }

}
