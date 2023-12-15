import {Component, Inject, OnInit} from '@angular/core';
import {ProduitServiceService} from "../produit-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PopUpAfficheArticleComponent} from "../pop-up-ajouter-article/pop-up-affiche-article.component";
@Component({
  selector: 'app-pop-up-supprimer-article',
  templateUrl: './pop-up-supprimer-article.component.html',
  styleUrls: ['./pop-up-supprimer-article.component.css']
})
export class PopUpSupprimerArticleComponent implements OnInit{
  articles?:any;
  inputdata:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private service:ProduitServiceService, private ref:MatDialogRef<PopUpAfficheArticleComponent>) {
  }

  public deleteArticl(idArticle:number) {
    let resp = this.service.deleteProduit(idArticle);
    resp.subscribe((data: any) => this.articles = data);
    console.log(resp)
  }

    closepop() {
     this.ref.close();
  }
    ngOnInit(): void {
        this.inputdata=this.data;
    }
}
