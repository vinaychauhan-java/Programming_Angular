import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx'; // It is used when we are working with any Obervable operators. 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Examle @ PreDefined Observable  
    const myNumbers = Observable.interval(1000)
      .map((data: number) => {
        return data * 2;
      });
    this.numberSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    // Examle @ Custom Observable  
    const myObservable = Observable.create((observer: Observer<String>) => {
      setTimeout(() => {
        observer.next('!! First Package !!');
      }, 2000);
      setTimeout(() => {
        observer.next('!! Second Package !!');
      }, 4000);
      setTimeout(() => {
        //observer.next('!! This Will not Work !!');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('!! Third Package !!');
      }, 6000);
    });

    this.customSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },  // Handling Data of an Obervable 
      (error: string) => { console.log(error); }, // Handling Erro of an Obervable 
      () => { console.log('!! Completed !!'); } // Handling Completion of an Obervable 
    );

  }

  ngOnDestroy() {
    this.numberSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
