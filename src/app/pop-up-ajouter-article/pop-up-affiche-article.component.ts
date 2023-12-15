import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProduitServiceService} from "../produit-service.service";
import {CategoriesServiceService} from "../categories-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FileUploadService} from "../file-upload.service";
import {UtilisateurServiceService} from "../utilisateur-service.service";
import {AuthenServiceService} from "../authen-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-pop-up-affiche-article',
  templateUrl: './pop-up-affiche-article.component.html',
  styleUrls: ['./pop-up-affiche-article.component.css']
})
export class PopUpAfficheArticleComponent implements OnInit {
  inputdata: any;
  articles?: any;
  categories?: any;
  nomArticle!: String;
  idArticle!: number;
  articleForm!: FormGroup;
  user: any;
  userConnecte: any;
  selectedFile: File | null = null;
  imageUrl?: string | ArrayBuffer | null = null;
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private serviceCat: CategoriesServiceService,
      private service: ProduitServiceService,
      private ref: MatDialogRef<PopUpAfficheArticleComponent>,
      private formBuilder: FormBuilder,
      private serviceFile: FileUploadService,
      private userService: UtilisateurServiceService,
      private auth: AuthenServiceService,
      private router: Router,
      private http:HttpClient) {
  }

  closepop() {
    this.ref.close();
  }

  ngOnInit(): void {
    this.getCategories();
    this.inputdata = this.data;
    this.iniateForm();
    this.userConnecte = this.auth.getAuthenticatedUser();
    console.log(this.userConnecte);
    console.log(this.userConnecte.sub)
    this.getUserByUserName(this.userConnecte.sub);
  }

  iniateForm() {
    this.articleForm = this.formBuilder.group({
      nomArticle: [''],
      prix: [''],
      categorie: [''],
      description: [''],
      images:['']
    });
  }

  getCategories() {
    let resp = this.serviceCat.getCategories();
    resp.subscribe((data: any) => this.categories = data);
  }

  /*public createNow() {
    const imageBase64 = this.getBase64Image(this.selectedImage);
    const article = {
      nomArticle: this.articleForm.controls['nom'].value,
      prix: this.articleForm.controls['prix'].value,
      categoryId: this.articleForm.controls['categorie'].value,
      description: this.articleForm.controls['description'].value,
      userId: this.user.userId,
      image:imageBase64
    }

    this.service.creatProduit(article).subscribe((data: any) => {
      console.log('data :', data);
    })
  }*/
  handleImageUpload(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;

    // Display image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result;
      // @ts-ignore
      console.log('iiii',this.imageUrl)
    };
    reader.readAsDataURL(file);
  }



  private getBase64Image(file: File ): string {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.toString().split(',')[1];
      this.articleForm.patchValue({ images: base64 });
    };
    return '';
  }

  onSubmit() {
    const formData = this.articleForm.value;

    const article = {
      nomArticle: formData.nomArticle,
      prix: formData.prix,
      description: formData.description,
      imageBase64:this.imageUrl,
      userId: this.user.userId,
      categoryId: this.articleForm.controls['categorie'].value,
    };

    this.service.creatProduit(article).subscribe(response => {
      console.log('Article créé avec succès', response);
      this.articleForm.reset();
    });
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







}
