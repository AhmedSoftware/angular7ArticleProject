import { Component } from '@angular/core';
import { AppareilService} from './appareil/appareil.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mon-projet-angular';
  constructor(){
  }

  ngOnInit(){
   
  }
}
