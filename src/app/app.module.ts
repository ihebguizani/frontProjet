import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { ListProduitComponent } from './list-produit/list-produit.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { PopUpAfficheArticleComponent } from './pop-up-ajouter-article/pop-up-affiche-article.component';
import {MatButtonModule} from "@angular/material/button";
import { PopUpSupprimerArticleComponent } from './pop-up-supprimer-article/pop-up-supprimer-article.component';
import { PopUpUpdateArticleComponent } from './pop-up-update-article/pop-up-update-article.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDesComponent } from './article-des/article-des.component';
import { ListeArticleByUserComponent } from './liste-article-by-user/liste-article-by-user.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { ListeArticleAdminComponent } from './liste-article-admin/liste-article-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponent,
    PopUpAfficheArticleComponent,
    PopUpSupprimerArticleComponent,
    PopUpUpdateArticleComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ArticleDesComponent,
    ListeArticleByUserComponent,
    ListeUtilisateurComponent,
    ListeArticleAdminComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
