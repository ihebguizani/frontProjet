import {Component, Inject, OnInit} from '@angular/core';
import {CategoriesServiceService} from "../categories-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-pop-up-cat',
  templateUrl: './pop-up-cat.component.html',
  styleUrls: ['./pop-up-cat.component.css']
})
export class PopUpCatComponent implements OnInit{
  categories:any;
  inputdata:any;


  constructor(private service:CategoriesServiceService,
              private ref:MatDialogRef<PopUpCatComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any,) {
  }
  public deleteCAt(idCategorie:number) {
    let resp = this.service.supprimerCategorie(idCategorie);
    resp.subscribe((data: any) => this.categories = data);
    console.log(resp)
  }

  closepop() {
    this.ref.close();
  }

  ngOnInit(): void {
    this.inputdata=this.data;

  }

}
