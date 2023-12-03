import {Categorie} from "./categorie";

export interface Article {
  idArticle?:Number;
  nomArticle:String;
  prix:number;
  categorie:Categorie;
  description:String;

}
