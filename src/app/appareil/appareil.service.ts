import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService  {

  constructor(private http:HttpClient){
  }
  
  appareilSubject = new Subject<any[]>();

  private appareils=[
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

   emitAppareilSubject(){
     this.appareilSubject.next(this.appareils.slice());
   }

   switchOnAll(){
     for(let appareil of this.appareils){
         appareil.status="allumé";
     }
     this.emitAppareilSubject();
   }

   switchOfAlll(){
     for(let appareil of this.appareils){
       appareil.status="éteint";
     }
     this.emitAppareilSubject();
     
   }
   
   putAll(){

   }

   getall(){
     this.http.get("rl",{responseType:"json"}).subscribe(
       (response)=>{
         console.log(response);
       },()=>{
         console.log("erreur");
       },()=>{
         console.log("complete response");
       })
   }

   onSwitch(i:number){
     this.appareils[i].status="allumé";
     this.emitAppareilSubject();
   }
   ofSwitch(i:number){
     this.appareils[i].status="éteint";
     this.emitAppareilSubject();
   }

   togleSwitch(i:number){
     if(this.appareils[i].status=="allumé"){
       this.appareils[i].status="éteint";
     }else{
       this.appareils[i].status="allumé";
     }
    this.emitAppareilSubject();
   }

   getAppareilById(id:number){
     const appareil=this.appareils.find(
       (s)=>{
         return s.id===id;
       }
     );
     return appareil;
     this.emitAppareilSubject();
   }

   
}
