import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

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
  hobbies: FormArray;
  forbiddenUsernames = ['Chris', 'Anna'];
  errorsMsgs = {
    username: {
      required: 'Username is required',
      forbiddenUsername: 'That username is forbidden'
    },
    email: {
      required: 'Email is required',
      email: 'That email is not the proper format',
      forbiddenEmail: 'That email is forbidden'
    }
  };
  isSubmitted = false;
  user: any = {};

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,
          [Validators.required, this.forbiddenUsername.bind(this)] 
        ),
        'email': new FormControl(null,
          [Validators.required, Validators.email],
          [this.forbiddenEmail.bind(this)]
        )
      }),
      'gender': new FormControl(null,
        [Validators.required]
      ),
      'hobbies': new FormArray([])
    });
    this.username = <FormControl>this.getControl('userData.username');
    this.email    = <FormControl>this.getControl('userData.email');
    this.gender   = <FormControl>this.getControl('gender');
    this.hobbies  = <FormArray>this.getControl('hobbies');

    // Subscribe to value changes
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    // Subscribe to form status changes
    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    });

    // Set entire form values
    this.signupForm.setValue({
      'userData': {
        'username': 'Emerald',
        'email': 'e.s.laurente@gmail.com'
      },
      'gender': 'Male',
      'hobbies': []
    });

    // Set partial form values
    this.signupForm.patchValue({
      'userData': {
        'username': 'Emerald',
        'email': 'e.s.laurente@gmail.com'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.user.name = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;
    this.isSubmitted = true;
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    this.hobbies.push(control);
  }

  getErrorMessage(control: FormControl, name: string): string {
    if (control.errors['required']) {
      return this.errorsMsgs[name].required;
    }
    for (let prop in control.errors) {
      return this.errorsMsgs[name][prop];
    }
  }

  private getControl(name: string): AbstractControl {
    return this.signupForm.get(name);
  }

  private forbiddenUsername(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) > -1) {
      return {
        'forbiddenUsername': true
      }
    }
    return null;
  }

  private forbiddenEmail(control: FormControl): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
    const promise = new Promise<{ [s: string]: boolean }>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'forbiddenEmail': true });
        }
        else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }
}
