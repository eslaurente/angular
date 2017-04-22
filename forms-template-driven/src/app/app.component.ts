import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('aForm') aForm: NgForm;

  ngOnInit(): void {
    console.log(this.aForm);
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log('submitted: ', form);
  // }

  onSubmit() {
    console.log(this.aForm);
  }
}
