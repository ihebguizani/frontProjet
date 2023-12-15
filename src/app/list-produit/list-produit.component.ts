import {Component, OnInit} from '@angular/core';
import {ProduitServiceService} from "../produit-service.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PopUpAfficheArticleComponent} from "../pop-up-ajouter-article/pop-up-affiche-article.component";
import {PopUpSupprimerArticleComponent} from "../pop-up-supprimer-article/pop-up-supprimer-article.component";
import {PopUpUpdateArticleComponent} from "../pop-up-update-article/pop-up-update-article.component";



@Component({
    selector: 'app-list-produit',
    templateUrl: './list-produit.component.html',
    styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
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
  checkSessionData(): boolean {
    // Récupérer les données de session
    const sessionData = sessionStorage.getItem('token');

    // Retourner true si les données de session existent, sinon false
    return sessionData !== null;

  }




    openup() {
      if (this.checkSessionData()) {
        this.dialog.open(PopUpAfficheArticleComponent, {
          width: '40%',
          enterAnimationDuration: '100ms',
          exitAnimationDuration: '100ms',
          data: {
            title: 'Ajouter Article'
          }
        })
      }else{
        this.router.navigateByUrl('/register');
        }
}



  opendetaille(idArticle:number) {
    this.router.navigate(['/detaile',idArticle]);
  }
}
