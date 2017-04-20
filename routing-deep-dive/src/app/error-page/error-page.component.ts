import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorTitle: string;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorTitle = this.route.snapshot.data['title'];
    this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Data) => {
      this.errorTitle = data['title'];
      this.errorMessage = data['message'];
    });
  }

}
