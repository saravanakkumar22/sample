import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  lgName:string="";
  password:string="";
  passwordType="password";
  msg:string="";
  showpswd:any;

  checkLogin(){
    if(this.lgName=="saravanan" && this.password=="1234"){
      this.msg="matched";
      this.redirectToHome();
    }
  }
  checkbox(){
if(this.showpswd){

  this.passwordType="password";
}
else{
  this.passwordType="text";
}
  }
  constructor(private routes:Router){}
  redirectToLogin(){
    this.routes.navigate([""]);
  }
  redirectToregister(){
    this.routes.navigate(["register"]);
  }
  redirectToHome(){
    this.routes.navigate(["home"]);
  }
}
