import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commande} from "./commande";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  public creatCommande(commande:any){
    return this.http.post("http://localhost:8000/createCommande",commande);
  }
  public getCommande(){
    return this.http.get("http://localhost:8000/allCommande");
  }
}
