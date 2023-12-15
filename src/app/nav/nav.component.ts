import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenServiceService} from "../authen-service.service";
import {UtilisateurServiceService} from "../utilisateur-service.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  userConnecte:any;
  user:any;

  constructor(public router: Router,
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

  goToLogin() {
    this.router.navigateByUrl('/login');

  }

  goToList() {
    this.router.navigateByUrl('/liste').then();
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  checkSessionData(): boolean {
    // Récupérer les données de session
    const sessionData = sessionStorage.getItem('token');

    // Retourner true si les données de session existent, sinon false
    return sessionData !== null;

  }
  logout() {
    this.authService.logout();
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

    goToProfil() {
        this.router.navigateByUrl('/profil');
    }
}
