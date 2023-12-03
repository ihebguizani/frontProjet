import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http:HttpClient) { }
  public getAllRole(){
    return this.http.get("http://localhost:8000/api/role/getAll");
  }
}
