import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObservableSubscription: Subscription;
  customObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers: Observable<number> = Observable.interval(1000)
                                                    .map((data: number) => {
                                                      return data * 2;
                                                    });
    this.numbersObservableSubscription = myNumbers.subscribe((num: number) => {
      console.log(num);
    });

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      
      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      setTimeout(() => {
        // observer.error('THIS DOES NOT WORK');
        observer.complete();
      }, 5000);

      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customObservableSubscription = myObservable.subscribe((data: string) => {
      console.log('DATA: ' + data);
    }, (error: string) => {
      console.log('ERROR: ' + error);
    }, () => {
      console.log('COMPLETED');
    });
  }

  ngOnDestroy(): void {
    this.numbersObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
