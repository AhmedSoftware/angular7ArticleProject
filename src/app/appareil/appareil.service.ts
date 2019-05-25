import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils=[
    {
      name:'Machine à laver',
      status:'éteint'
    },
    {
      name:'Frigo',
      status:'allumé'
    },
    {
      name:'Ordinateur',
      status:'éteint'
    }
   ];

   switchOnAll(){
     for(let appareil of this.appareils){
         appareil.status="allumé";
     }
   }

   switchOfAlll(){
     for(let appareil of this.appareils){
       appareil.status="éteint";
     }
     
   }

   onSwitch(i:number){
     this.appareils[i].status="allumé";
   }
   ofSwitch(i:number){
     this.appareils[i].status="éteint";
   }

   togleSwitch(i:number){
     if(this.appareils[i].status=="allumé"){
       this.appareils[i].status="éteint";
     }else{
       this.appareils[i].status="allumé";
     }
   }

   
}
