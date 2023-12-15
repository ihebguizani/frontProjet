import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../commande.service";

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit{
  commands:any;
  constructor(private service:CommandeService) {
  }
  ngOnInit(): void {

    let resp = this.service.getCommande()
    resp.subscribe((data: any) => this.commands = data);
  }


}
