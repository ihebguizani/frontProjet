import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CommandeService} from "../commande.service";
import {UtilisateurServiceService} from "../utilisateur-service.service";
import {AuthenServiceService} from "../authen-service.service";
import {ProduitServiceService} from "../produit-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit{
  commandeForm!: FormGroup;
  user:any;
  userConnecte:any;
  article:any;
  constructor(private formBuilder: FormBuilder,
              private service:CommandeService,
              private userService:UtilisateurServiceService,
              private auth:AuthenServiceService,
              private serviceArticle:ProduitServiceService,
              private route:Router,
              private router:ActivatedRoute) {
  }
  ngOnInit(){
    this.iniateForm();
    this.userConnecte = this.auth.getAuthenticatedUser();
    console.log(this.userConnecte);
    console.log(this.userConnecte.sub)
    this.getUserByUserName(this.userConnecte.sub);
    this.router.params.subscribe(params => {
      const id = params['idArticle'];
      this.serviceArticle.getProduitById(id).subscribe(article =>{
        this.article =article;
      });
    });

  }
  iniateForm() {
    this.commandeForm = this.formBuilder.group({
      address:[''],
      phone:['']
    });
  }
  public createNow() {
    console.log(this.article);
    const commande = {
      address: this.commandeForm.controls['address'].value,
      phone: this.commandeForm.controls['phone'].value,
      userId:this.user.userId,
      idArticle:this.article.idArticle,
      prix:this.article.prix

    }
    console.log(commande)

    this.service.creatCommande(commande).subscribe((data: any) => {
      console.log('data :', data);
    })
    this.route.navigateByUrl('liste');
  }
  public getUserByUserName(username: string) {

    let rep = this.userService.getUserByUserName(username);

    rep.subscribe((data: any) => this.user = data);
    console.log(rep);
  }
  checkSessionData(): boolean {
    // Récupérer les données de session
    const sessionData = sessionStorage.getItem('token');

    // Retourner true si les données de session existent, sinon false
    return sessionData !== null;

  }
}
