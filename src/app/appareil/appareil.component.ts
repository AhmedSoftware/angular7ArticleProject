import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from './appareil.service';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus:string="éteint";
  @Input() index:number;
  @Input() id:number;
  namebtn:string;
 
  

  constructor(private appareilServie:AppareilService) { 
   
  }

  ngOnInit() {
    this.toglebtn();
  }

  getStatus(){
    return this.appareilStatus;
  }

  toglebtn(){
    if(this.appareilStatus==='allumé'){
      this.namebtn="Eteint";
      return true;
    }else{
      this.namebtn="Allumé";
      return false;
    }
  }
  getColor(){
    if(this.appareilStatus==='allumé'){
      return 'green';
    }else{
      return 'red';
    }
  }

  allumer(){
    this.appareilServie.onSwitch(this.index)
  }

  eteint(){
    this.appareilServie.ofSwitch(this.index);
  }

  appareilClick(){
    this.appareilServie.togleSwitch(this.index);
  }
}
