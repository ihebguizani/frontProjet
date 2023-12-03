import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProduitServiceService} from "../produit-service.service";
import {CategoriesServiceService} from "../categories-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pop-up-affiche-article',
  templateUrl: './pop-up-affiche-article.component.html',
  styleUrls: ['./pop-up-affiche-article.component.css']
})
export class PopUpAfficheArticleComponent implements OnInit{
  inputdata:any;
  articles?:any;
  categories?:any;
  nomArticle!:String;
  prixArticle!:number;
  articleForm!:FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private serviceCat: CategoriesServiceService,
    private service:ProduitServiceService,
    private ref:MatDialogRef<PopUpAfficheArticleComponent>,
    private formBuilder: FormBuilder) {
  }

  closepop() {
    this.ref.close();
  }

  ngOnInit(): void {
    this.getCategories();
    this.inputdata=this.data;
    this.iniateForm();
  }

  iniateForm(){
    this.articleForm = this.formBuilder.group({
      nom: [''],
      prix: [''],
      categorie: [''],
      description:[''],
    });
  }
  getCategories() {
    let resp = this.serviceCat.getCategories();
    resp.subscribe((data: any) => this.categories = data);
  }

  public createNow(){
    const article={
      nomArticle:this.articleForm.controls['nom'].value,
      prix:this.articleForm.controls['prix'].value,
      categoryId: this.articleForm.controls['categorie'].value,
      description:this.articleForm.controls['description'].value,
    }
    this.service.creatProduit(article).subscribe((data:any)=>{
      console.log('data :',data);
    })
  }
}
