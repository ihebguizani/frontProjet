import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProduitComponent} from "./list-produit/list-produit.component";
import {LoginComponent} from "./login/login.component";
import {ArticleDesComponent} from "./article-des/article-des.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path:"liste",component:ListProduitComponent},
  {path:'login',component:LoginComponent},
  {path:'detaile',component:ArticleDesComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
