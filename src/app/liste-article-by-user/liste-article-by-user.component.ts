import {Component, OnInit} from '@angular/core';
import {ProduitServiceService} from "../produit-service.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PopUpAfficheArticleComponent} from "../pop-up-ajouter-article/pop-up-affiche-article.component";
import {PopUpSupprimerArticleComponent} from "../pop-up-supprimer-article/pop-up-supprimer-article.component";
import {PopUpUpdateArticleComponent} from "../pop-up-update-article/pop-up-update-article.component";

@Component({
  selector: 'app-liste-article-by-user',
  templateUrl: './liste-article-by-user.component.html',
  styleUrls: ['./liste-article-by-user.component.css']
})
export class ListeArticleByUserComponent implements OnInit{
  produits: any;
  constructor(private service: ProduitServiceService,
              public router:Router,
              private dialog:MatDialog
  ) {}
  public getarticlById(idArticle: number) {
    let resp = this.service.getProduitById(idArticle);
    resp.subscribe((data: any) => this.produits = data);
  }

  ngOnInit() {
    let resp = this.service.getProduit()
    resp.subscribe((data: any) => this.produits = data);
  }



  add() {
    this.router.navigate(['create']);
  }
  openup(){
    this.dialog.open(PopUpAfficheArticleComponent,{width:'40%',
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'Add Article'
      }})
  }

  openupeffacer() {
    this.dialog.open(PopUpSupprimerArticleComponent,{
      width:'20%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'Est_ce que tu veux supprimer cet article?'
      }
    })
  }

  openupdate() {
    this.dialog.open(PopUpUpdateArticleComponent,{
      width:'20%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'mise a jour de article?'
      }
    })
  }
}
