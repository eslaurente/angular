import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from "@angular/forms";

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

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,
          [Validators.required] 
        ),
        'email': new FormControl(null,
          [Validators.required, Validators.email]
        )
      }),
      'gender': new FormControl(null,
        [Validators.required]
      ),
      'hobbies': new FormArray([])
    });
    this.username = <FormControl>this.getControl('userData.username');
    this.email =    <FormControl>this.getControl('userData.email');
    this.gender =   <FormControl>this.getControl('gender');
    this.hobbies =  <FormArray>this.getControl('hobbies');    
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    this.hobbies.push(control);
  }

  private getControl(name: string): AbstractControl {
    return this.signupForm.get(name);
  }
}
