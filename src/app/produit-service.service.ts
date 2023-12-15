import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "./article";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {


  constructor(private http:HttpClient) { }
  public getProduit(){
    return this.http.get("http://127.0.0.1:8000/articles");
  }
  public getProduitById(idArticle:number){
    return this.http.get("http://127.0.0.1:8000/article/"+idArticle);
  }
  public deleteProduit(idArticle:number){
    return this.http.delete("http://127.0.0.1:8000/article/delete/"+idArticle);
  }
  public creatProduit(article:any){
    return this.http.post("http://127.0.0.1:8000/articleCreat",article);
  }
  public updateProduit(idArticle:number,article:any){
    return this.http.put("http://127.0.0.1:8000/article/update/"+idArticle,article)
  }
  getArticlesByUser(userId: number): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:8000/user/`+userId);
  }

  getArticlesByCategorie(categorieId: number): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:8000/categorie/`+categorieId);
  }
}
