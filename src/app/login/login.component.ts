import { Component, OnInit} from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginStatus:boolean;



  constructor( private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.loginStatus=this.loginService.isAuth;
    
  }

  onSignIn(){
    this.loginService.signIn().then(
      ()=>{
        console.log('Sign in Successfull!');
        this.loginStatus=this.loginService.isAuth;
        this.router.navigate(['appareils']);
      }
    );

  }

  onSignOut(){
    this.loginService.signOut();
    this.loginStatus=this.loginService.isAuth;
    
  }
  

}
