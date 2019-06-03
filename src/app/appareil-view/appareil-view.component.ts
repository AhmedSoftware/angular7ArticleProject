import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../appareil/appareil.service';
import { $ } from 'protractor';
import { Subscription } from 'rxjs';

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
   this.appareilService.appareilSubject.subscribe(
     (appareils:any[])=>{
       this.appareils=appareils;
     }
   );
   this.appareilService.emitAppareilSubject();

  }

  ngAfterViewInit(){

    var acc = document.getElementsByClassName("card-header");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

}
