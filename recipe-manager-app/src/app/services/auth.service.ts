import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {
  private token = '';

  constructor() { }

  signupUser(email: string, password: string): Promise<any> {
    return (<Promise<any>> firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error: any) => {
        this.token = '';
        return firebase.Promise.reject(error);
      }));
  }

  signinUser(email: string, password: string): Promise<any> {
    return (<Promise<any>> firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        return firebase.auth().currentUser.getToken().then((token: string) => {
          this.token = token;
        });
      })
      .catch((error: any) => {
        this.token = '';
        return firebase.Promise.reject(error);
      }));
  }

  getToken(): string {
    (<Promise<string>> firebase.auth().currentUser.getToken().then((token: string) => {
        this.token = token;
        return this.token;
      })
      .catch((error: any) => {
        this.token = '';
        return firebase.Promise.reject(error);
      }));
    return this.token;
  }

  isAuthenticated() {
    return this.token !== '';
  }
}
