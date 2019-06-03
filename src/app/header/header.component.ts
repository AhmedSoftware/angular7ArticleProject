import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  secondes:number;
  conteurSubscription:Subscription;

  ngOnInit() {
    this.loginService.secondesSubject.subscribe((secondes:number)=>{
         this.secondes=secondes;
    });
    const conteur  = interval(1000);
    this.conteurSubscription=conteur.subscribe((valule)=>{
      this.loginService.emitSecondedesSubject();
    })
  }

  ngOnDestroy(){
     this.conteurSubscription.unsubscribe();
  }
  
  

  

}
