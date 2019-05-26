import { Component, OnInit } from '@angular/core';
import { interval,Subscription} from 'rxjs';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  secondes:number;
  counterSubscription: Subscription;

  ngOnInit() {
    
      const counter =  interval(1000);
      this.counterSubscription=counter.subscribe(
        (value) => {
          this.secondes = value;
        },
        (error) => {
          console.log('Uh-oh, an error occurred! : ' + error);
        },
        () => {
          console.log('Observable complete!');
        }
      );

      
  }
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
  

  

}
