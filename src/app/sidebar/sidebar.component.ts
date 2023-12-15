import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenServiceService} from "../authen-service.service";
import {UtilisateurServiceService} from "../utilisateur-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
    userConnecte:any;
    user:any;
    constructor(private route:Router,
                private authService:AuthenServiceService,
                private userService:UtilisateurServiceService) {
    }
    ngOnInit() {
        this.userConnecte = this.authService.getAuthenticatedUser();
        console.log(this.userConnecte);
        this.getUserByUserName(this.userConnecte.sub);
    }
    public getUserByUserName(username:string){

        let rep=this.userService.getUserByUserName(username);

        rep.subscribe((data: any) => this.user = data);
    }
    public verifAdmin(){
        if (this.userConnecte.sub=="admin"){
            return true;
        }else {return false;}
    }

    goToArticleUser() {
        this.route.navigateByUrl('/listeArticleUser');

    }

    goTolisteUser() {
        this.route.navigateByUrl('/listeUser');
    }

    goToListeArticle() {
        this.route.navigateByUrl('/admin')
    }

    goToListeCommande() {
        this.route.navigateByUrl('/commande')
    }
    goToCat(){
      this.route.navigateByUrl('/cat')
    }
}
