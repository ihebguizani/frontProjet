import {Component, Input, OnInit} from '@angular/core';
import {ProduitServiceService} from "../produit-service.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-article-des',
  templateUrl: './article-des.component.html',
  styleUrls: ['./article-des.component.css']
})
export class ArticleDesComponent implements OnInit{
  article:any;
  constructor(private service:ProduitServiceService,
              private route:Router,
              private router:ActivatedRoute) {
  }


  ngOnInit(): void {
      this.router.params.subscribe(params => {
          const id = params['idArticle'];
    this.service.getProduitById(id).subscribe(article =>{
      this.article =article;
    });


  });
  }

    commander(idArticle:number) {
      if (this.checkSessionData()) {
        this.route.navigate(['/commander', idArticle]);
      } else {
        this.route.navigateByUrl('/register')
      }
    }
  checkSessionData(): boolean {
    // Récupérer les données de session
    const sessionData = sessionStorage.getItem('token');

    // Retourner true si les données de session existent, sinon false
    return sessionData !== null;

  }
}
