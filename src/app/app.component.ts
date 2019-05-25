import { Component } from '@angular/core';
import { AppareilService} from './appareil/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth=false;
  appareils:any[];
  lastUpdate = new Promise((resolve,reject)=>{
    const date = new Date();
    setTimeout(()=>{
      resolve(date);
    },2000);
  });
  
  title = 'mon-projet-angular';
  constructor( private appareilServie:AppareilService){
    setTimeout(()=>{
      this.isAuth=true;
    },4000);
    
  }

  onAllumers(){
   this.appareilServie.switchOnAll();
  }

  onEteints(){
    this.appareilServie.switchOfAlll();
  }

  ngOnInit(){
    this.appareils=this.appareilServie.appareils;
  }
}
