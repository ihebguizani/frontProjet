import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import {AuthenServiceService} from "../authen-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  authForm!:FormGroup;
  constructor(private service:AuthenServiceService,
              private router:Router,
              private formBuilder:FormBuilder,) {
  }
  iniateForm(){
    this.authForm = this.formBuilder.group({
      password: [''],
      username:[''],})}

  login(){
    debugger
    const authen={
      username:this.authForm.controls['username'].value,
      password:this.authForm.controls['password'].value}
  this.service.login(authen).subscribe((res:any)=>{
    console.log('res',res);
    sessionStorage.setItem('token',res.token);
    this.router.navigateByUrl('/liste')
  })
  }


  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  ngOnInit(): void {
    this.iniateForm()
  }
}
