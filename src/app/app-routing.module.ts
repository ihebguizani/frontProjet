import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProduitComponent} from "./list-produit/list-produit.component";
import {LoginComponent} from "./login/login.component";
import {ArticleDesComponent} from "./article-des/article-des.component";
import {RegisterComponent} from "./register/register.component";
import {ListeArticleAdminComponent} from "./liste-article-admin/liste-article-admin.component";
import {ProfilComponent} from "./profil/profil.component";
import {ListeArticleByUserComponent} from "./liste-article-by-user/liste-article-by-user.component";
import {ListeUtilisateurComponent} from "./liste-utilisateur/liste-utilisateur.component";
import {CommanderComponent} from "./commander/commander.component";
import {ListeCommandeComponent} from "./liste-commande/liste-commande.component";
import {CategorieComponent} from "./categorie/categorie.component";
import {ImageLoadComponent} from "./image-load/image-load.component";

const routes: Routes = [
  {path:"liste",component:ListProduitComponent},
  {path:'login',component:LoginComponent},
  {path:'detaile/:idArticle',component:ArticleDesComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:ListeArticleAdminComponent},
  {path:'profil',component:ProfilComponent},
  {path:'listeArticleUser',component:ListeArticleByUserComponent},
  {path:'listeUser',component:ListeUtilisateurComponent},
  {path:'commander/:idArticle',component:CommanderComponent},
  {path:'commande',component:ListeCommandeComponent},
  {path:'cat',component:CategorieComponent},
  {path:'loadImage',component:ImageLoadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
