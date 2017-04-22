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
  showAll = false;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['Male', 'Female'];

  ngOnInit(): void {
    console.log(this.aForm);
    console.log(this.userDataGroup);
  }

  autoFill() {
    const suggestedName = 'eslaurente';
    this.showAll = true;
    setTimeout(() => {
      this.aForm.setValue({
        userData: {
          username: suggestedName,
          email: 'e.s.laurente@gmail.com'
        },
        secretQuestion: {
          question: 'pet',
          answer: 'Mocha'
        },
        gender: 'Male'
      });
      
      // NOTE:
      // Can use this.aForm.form.patchValue() to selectively change only some of the fields 
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('submitted: ', form);
  // }

  onSubmit() {
    console.log(this.aForm);
  }
}
