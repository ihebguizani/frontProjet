import {Component, OnInit} from '@angular/core';
import {CategoriesServiceService} from "../categories-service.service";
import {PopUpSupprimerArticleComponent} from "../pop-up-supprimer-article/pop-up-supprimer-article.component";
import {MatDialog} from "@angular/material/dialog";
import {PopUpCatComponent} from "../pop-up-cat/pop-up-cat.component";
import {PopupAjoutCatComponent} from "../popup-ajout-cat/popup-ajout-cat.component";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
 categories:any;

  constructor(private service:CategoriesServiceService,
              private dialog:MatDialog) {
  }
  ngOnInit(): void {
    let resp = this.service.getCategories()
    resp.subscribe((data: any) => this.categories = data);
  }

  opnpop(idCategorie:number){
  this.dialog.open(PopUpCatComponent,{width:'40%',
    enterAnimationDuration:'100ms',
    exitAnimationDuration:'100ms',
    data:{
      title:'Supprimer Article',
      idCategorie:idCategorie
    }})
}

  ajoutCat() {
    this.dialog.open(PopupAjoutCatComponent,{width:'50%',
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'Ajouter Categorie'
      }})

  }
}
