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
  submitted = false;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };

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
    this.user.username = this.aForm.controls.userData.value.username;
    this.user.email = this.aForm.controls.userData.value.email;
    this.user.question = this.aForm.controls.secretQuestion.value.question;
    this.user.answer = this.aForm.controls.secretQuestion.value.answer;
    this.user.gender = this.aForm.value.gender;
    this.submitted = true;
  }
}
