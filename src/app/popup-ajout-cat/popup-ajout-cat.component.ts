import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoriesServiceService} from "../categories-service.service";
import {CategorieComponent} from "../categorie/categorie.component";

@Component({
  selector: 'app-popup-ajout-cat',
  templateUrl: './popup-ajout-cat.component.html',
  styleUrls: ['./popup-ajout-cat.component.css']
})
export class PopupAjoutCatComponent implements OnInit{
    categForm!: FormGroup;
    inputdata: any;

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private serviceCat: CategoriesServiceService,
              private ref: MatDialogRef<CategorieComponent>,) {
  }
  ngOnInit(): void {
    this.iniateForm();
    this.inputdata=this.data;
  }
    iniateForm() {
        this.categForm = this.formBuilder.group({
            nomCategorie: [''],
        })
    }
    public ajouCat(){
      const categorie={
        nomCategorie:this.categForm.controls['nomCategorie'].value
      }
      this.serviceCat.creatCategorie(categorie).subscribe((data:any)=>{
        console.log('data:',data);
      })
    }

    closepop() {
        this.ref.close();
    }
}
