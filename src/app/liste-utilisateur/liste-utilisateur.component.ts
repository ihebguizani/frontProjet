import {Component, OnInit} from '@angular/core';
import {UtilisateurServiceService} from "../utilisateur-service.service";

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit{
  users:any
  constructor(private userService:UtilisateurServiceService) {
  }
  ngOnInit(): void {

    let resp = this.userService.getAll()
    resp.subscribe((data: any) => this.users = data);
  }

}
