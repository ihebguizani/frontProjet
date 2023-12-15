import {Component, Inject, OnInit} from '@angular/core';

import {ProduitServiceService} from "../produit-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ListeArticleByUserComponent} from "../liste-article-by-user/liste-article-by-user.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pop-up-update-article',
  templateUrl: './pop-up-update-article.component.html',
  styleUrls: ['./pop-up-update-article.component.css']
})
export class PopUpUpdateArticleComponent implements OnInit{
  produit?:any;
  articles?:any;
  nomArticle!:string;
  prixArticle!:number;
  articleForm!: FormGroup;
  inputdata: any;
  constructor( @Inject(MAT_DIALOG_DATA) public data:any,
               private service:ProduitServiceService,
               private ref:MatDialogRef<ListeArticleByUserComponent>,
               private formBuilder: FormBuilder,
               private router:ActivatedRoute) {
  }
  closepop() {
    this.ref.close();
  }
  ngOnInit(): void {
    this.iniateForm();
    this.inputdata = this.data;
      const id = this.data.idArticle;
      this.service.getProduitById(id).subscribe(articl =>{
        this.articles =articl;
        console.log(this.articles);
      });



  }
  iniateForm() {
    this.articleForm = this.formBuilder.group({
      nom: [''],
      prix: [''],
      description:['']
    })
  }
  public updateNow(idArticle:any){
    console.log(this.articles)

      const article={

        nomArticle:this.articleForm.controls['nom'].value,
        prix:this.articleForm.controls['prix'].value,
        description:this.articleForm.controls['description'].value

      }
      debugger
      if(article.nomArticle===""){
        article.nomArticle=this.articles.nomArticle;
      }if(article.prix===""){
        article.prix=this.articles.prix;
      }if (article.description===""){
        article.description=this.articles.description;
      }
      console.log(article)
      this.service.updateProduit(idArticle,article).subscribe((data:any)=>{
        console.log('data :',data);
      })
    }

}
