import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils=[
    {
      id:1,
      name:'Machine à laver',
      status:'éteint'
    },
    {
      id:2,
      name:'Frigo',
      status:'allumé'
    },
    {
      id:3,
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

   getAppareilById(id:number){
     const appareil=this.appareils.find(
       (s)=>{
         return s.id===id;
       }
     );
     return appareil;
   }

   
}
