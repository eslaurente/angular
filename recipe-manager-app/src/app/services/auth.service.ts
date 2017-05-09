import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {
  private token = '';

  constructor() { }

  signupUser(email: string, password: string): Promise<any> {
    return (<Promise<any>> firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error: any) => {
        this.clearToken();
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
        this.clearToken();
        return firebase.Promise.reject(error);
      }));
  }

  logout(): Promise<any> {
    return <Promise<any>> firebase.auth().signOut().then(() => {
      this.clearToken();
    })
    .catch((error: any) => {
      console.log(error);
      this.clearToken();
    });
  }

  getToken(): string {
    (<Promise<string>> firebase.auth().currentUser.getToken().then((token: string) => {
        this.token = token;
        return this.token;
      })
      .catch((error: any) => {
        this.clearToken();
        return firebase.Promise.reject(error);
      }));
    return this.token;
  }

  isAuthenticated() {
    return this.token !== '';
  }

  private clearToken() {
    this.token = '';
  }
}
