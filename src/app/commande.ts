
import {User} from "./user";
import {Article} from "./article";

export interface Commande {
    idCommande?:Number;
    address:String;
    prix:Number;
    phone:String;
    article:Article;
    user:User;
}
