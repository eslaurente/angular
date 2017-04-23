import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['Male', 'Female'];
  signupForm: FormGroup;
  username: FormControl;
  email: FormControl;
  gender: FormControl;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null,
        [Validators.required]
      ),
      'email': new FormControl(null,
        [Validators.required, Validators.email]
      ),
      'gender': new FormControl('Male',
        [Validators.required]
      )
    });
    this.username = this.getControl('username');
    this.email = this.getControl('email');
    this.gender = this.getControl('gender');
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  private getControl(name: string): FormControl {
    return <FormControl>this.signupForm.get(name);
  }
}
