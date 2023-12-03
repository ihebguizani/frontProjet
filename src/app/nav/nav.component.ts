import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  constructor(public router: Router) {
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
}
