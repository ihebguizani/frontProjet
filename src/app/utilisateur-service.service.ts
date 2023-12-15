import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`http://localhost:8000/api/user/getAllUsers`);
  }
  getUserByUserName(username:string){
    return this.http.get('http://localhost:8000/api/user/getByUsername/'+username);
  }
}
