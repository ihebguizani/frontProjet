import { Component } from '@angular/core';
import {ProduitServiceService} from "../produit-service.service";

@Component({
  selector: 'app-article-des',
  templateUrl: './article-des.component.html',
  styleUrls: ['./article-des.component.css']
})
export class ArticleDesComponent {
  produits:any;
  constructor(private service:ProduitServiceService) {
  }
  public getarticlById(idArticle: number) {
    let resp = this.service.getProduitById(idArticle);
    resp.subscribe((data: any) => this.produits = data);
  }

}
