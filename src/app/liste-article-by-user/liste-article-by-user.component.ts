import {Component, OnInit} from '@angular/core';
import {ProduitServiceService} from "../produit-service.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PopUpAfficheArticleComponent} from "../pop-up-ajouter-article/pop-up-affiche-article.component";
import {PopUpSupprimerArticleComponent} from "../pop-up-supprimer-article/pop-up-supprimer-article.component";
import {PopUpUpdateArticleComponent} from "../pop-up-update-article/pop-up-update-article.component";
import {UtilisateurServiceService} from "../utilisateur-service.service";
import {AuthenServiceService} from "../authen-service.service";
import {User} from "../user";

@Component({
  selector: 'app-liste-article-by-user',
  templateUrl: './liste-article-by-user.component.html',
  styleUrls: ['./liste-article-by-user.component.css']
})
export class ListeArticleByUserComponent implements OnInit{
  produits: any;
  user!:any;
  userConnecte:any;

  constructor(private service: ProduitServiceService,
              public router:Router,
              private dialog:MatDialog,
              private userService:UtilisateurServiceService,
              private auth:AuthenServiceService,
  ) {}
  public getarticlById(idArticle: number) {
    let resp = this.service.getProduitById(idArticle);
    resp.subscribe((data: any) => this.produits = data);
  }

  ngOnInit() {
    this.service.getArticlesByUser(1).subscribe((data:any) => {this.produits = data
      console.log('Articles by user:', data);
    });
    this.userConnecte = this.auth.getAuthenticatedUser();
    console.log(this.userConnecte);
    console.log(this.userConnecte.sub)

    this.getUserByUserName(this.userConnecte.sub);
  }
  public getUserByUserName(username: string) {

    let rep = this.userService.getUserByUserName(username);

    rep.subscribe((data: any) => this.user = data);
    console.log(rep);
  }
  checkSessionData(): boolean {
    // Récupérer les données de session
    const sessionData = sessionStorage.getItem('token');

    // Retourner true si les données de session existent, sinon false
    return sessionData !== null;

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

  openupeffacer(idArticle:number) {
    this.dialog.open(PopUpSupprimerArticleComponent,{
      width:'20%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'Est_ce que tu veux supprimer cet article?',
        idArticle:idArticle
      }
    })
  }

  openupdate(idArticle:number) {
    this.dialog.open(PopUpUpdateArticleComponent,{
      width:'20%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'mise a jour de article',
        idArticle:idArticle
      }
    })
  }
}
