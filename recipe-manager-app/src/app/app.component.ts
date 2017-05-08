import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
    const config = {
      apiKey: "AIzaSyDoTWF_GHuXLTun418ajajkWWPDGI1apTc",
      authDomain: "udemy-ng-recipe-book-a5dc3.firebaseapp.com",
      databaseURL: "https://udemy-ng-recipe-book-a5dc3.firebaseio.com",
      projectId: "udemy-ng-recipe-book-a5dc3",
      storageBucket: "udemy-ng-recipe-book-a5dc3.appspot.com",
      messagingSenderId: "924279792238"
    };
    firebase.initializeApp(config);
  }
}
