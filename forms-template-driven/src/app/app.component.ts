import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, NgModelGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('aForm') aForm: NgForm;
  @ViewChild('userData') userDataGroup: NgModelGroup;
  defaultQuestion = 'teacher';
  answer = '';

  ngOnInit(): void {
    console.log(this.aForm);
    console.log(this.userDataGroup);
    
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
