import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {Authen} from "./authen";
import {User} from "./user";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenServiceService {
    private isLoggedIn = false;
    private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient) {
  }
  login(authen:Authen): Observable<any>{
    return this.http.post('http://localhost:8000/api/login',authen)
  }
 register(user:User):Observable<any>{
    return this.http.post('http://localhost:8000/api/user/add',user);
 }



    isAuthenticated(): boolean {
        return this.isLoggedIn;
    }


    islogin() {
        this.isLoggedIn = true;
    }


    logout() {
        this.isLoggedIn = false;
    }
    getAuthenticatedUser(): any {
        const token = sessionStorage.getItem('token');

        if (token && !this.jwtHelper.isTokenExpired(token)) {
            const decodedToken = this.jwtHelper.decodeToken(token);
            console.log(decodedToken)
            return decodedToken;
        } else {
            return null;
        }
    }


}
