import {Categorie} from "./categorie";
import {User} from "./user";

export interface Article {
  idArticle?:Number;
  nomArticle:String;
  prix:number;
  categorie:Categorie;
  description:String;
  user:User;
  imageBase64:String;

}
