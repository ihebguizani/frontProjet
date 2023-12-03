import {Component, Inject, OnInit} from '@angular/core';
import {Article} from "../article";
import {ProduitServiceService} from "../produit-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PopUpAfficheArticleComponent} from "../pop-up-ajouter-article/pop-up-affiche-article.component";

@Component({
  selector: 'app-pop-up-update-article',
  templateUrl: './pop-up-update-article.component.html',
  styleUrls: ['./pop-up-update-article.component.css']
})
export class PopUpUpdateArticleComponent implements OnInit{
  produit?:any;
  produits?:any;
  nomArticle!:string;
  prixArticle!:number;
  constructor( @Inject(MAT_DIALOG_DATA) public data:any, private service:ProduitServiceService, private ref:MatDialogRef<PopUpAfficheArticleComponent>) {
  }
  closepop() {
    this.ref.close();
  }
  ngOnInit(): void {}
  /*public updateNow(idArticle:any){
    if(this.nomArticle && this.prixArticle){
      const produit: Article={
        nomArticle:this.nomArticle,
        prix:this.prixArticle,
        categorie:{},
      }
      this.service.updateProduit(produit,idArticle).subscribe((data:any)=>{
        console.log('data :',data);
      })
    }
  }*/
}
