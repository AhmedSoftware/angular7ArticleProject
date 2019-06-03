import { Injectable } from '@angular/core';
import { interval,Subscription, Subject} from 'rxjs';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  isAuth = false;
  counterSubscription: Subscription;
  private secondes:number=0;
  secondesSubject = new Subject<number>();

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            this.getSecondes();
            resolve(true);
          }, 2000
        );
      }
    );
  }

  emitSecondedesSubject(){
     this.secondesSubject.next(this.secondes);
  }

  signOut() {
    this.isAuth = false;
    this.counterSubscription.unsubscribe();
    this.secondes=0;
    this.emitSecondedesSubject();
  }

  getSecondes() {

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
}
