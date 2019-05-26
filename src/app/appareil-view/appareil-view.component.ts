import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../appareil/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  constructor(private appareilService:AppareilService) { }

  appareils:any[];
  isAuth=false;
  lastUpdate = new Promise((resolve,reject)=>{
    const date = new Date();
    setTimeout(()=>{
      resolve(date);
    },2000);
  });
  
  onAllumers(){
    this.appareilService.switchOnAll();
   }
 
   onEteints(){
     this.appareilService.switchOfAlll();
   } 
  ngOnInit() {
    this.appareils=this.appareilService.appareils;
  }

}
