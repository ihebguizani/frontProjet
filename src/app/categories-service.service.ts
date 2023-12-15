import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  constructor(private http:HttpClient) { }
  public creatCategorie(categorie:any){
    return this.http.post("http://localhost:8000/categorieCreat",categorie);
  }
  public getCategories(){
    return this.http.get("http://localhost:8000/categories");
  }
  public supprimerCategorie(idCategorie:number){
    return this.http.delete('http://localhost:8000/article/categorie/'+idCategorie)
  }
}
