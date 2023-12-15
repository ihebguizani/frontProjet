import {Component, OnInit} from '@angular/core';
import {AuthenServiceService} from "../authen-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleServiceService} from "../role-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  userForm!:FormGroup;
  role:any;

  constructor(private authn:AuthenServiceService,
              private formBuilder:FormBuilder,
              private serviceR:RoleServiceService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.iniateForm();
    this.getAllRole();
  }

  iniateForm(){
    this.userForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      password: [''],
      username:[''],
      phone:[''],
      address:[''],
      email:[''],
    });
  }
  public register(){
    const user={

      firstname:this.userForm.controls['firstname'].value,
      lastname:this.userForm.controls['lastname'].value,
      username: this.userForm.controls['username'].value,
      email:this.userForm.controls['email'].value,
      password:this.userForm.controls['password'].value,
      phone:this.userForm.controls['phone'].value,
      address:this.userForm.controls['address'].value,
      role:"CLIENT"
    }
    console.log(user);
    this.authn.register(user).subscribe((data:any)=>{
      console.log('data :',data);
      this.router.navigateByUrl('/login');
    })
  }
  getAllRole() {
    let resp = this.serviceR.getAllRole();
    resp.subscribe((data: any) => this.role = data);
  }

}
