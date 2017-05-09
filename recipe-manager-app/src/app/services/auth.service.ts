import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {

  constructor() { }

  signupUser(email: string, password: string): Promise<any> {
    return (<Promise<any>> firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error: any) => {
        return firebase.Promise.reject(error);
      }));
  }

  signinUser(email: string, password: string): Promise<any> {
    return (<Promise<any>> firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error: any) => {
        return firebase.Promise.reject(error);
      }));
  }
}
