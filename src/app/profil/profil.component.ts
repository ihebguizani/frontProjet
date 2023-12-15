import {Component, OnInit} from '@angular/core';
import {AuthenServiceService} from "../authen-service.service";
import {UtilisateurServiceService} from "../utilisateur-service.service";
import {User} from "../user";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
  userConnecte:any;
  user!:User;
  constructor(private auth:AuthenServiceService,
              private userService:UtilisateurServiceService) {
  }
  ngOnInit(): void {
    this.userConnecte = this.auth.getAuthenticatedUser();
    console.log(this.userConnecte);
    console.log(this.userConnecte.sub)
    this.getUserByUserName(this.userConnecte.sub);
  }
  public getUserByUserName(username:string){
    let rep=this.userService.getUserByUserName(username);
    console.log(rep);
    rep.subscribe((data: any) => this.user = data);
    console.log(this.user);
  }

}
