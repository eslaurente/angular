import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {
  private user = {
    displayName: '',
    email: '',
    token: ''
  };

  constructor() { }

  signupUser(email: string, password: string, displayName: string): Promise<any> {
    return (<Promise<any>> firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        return firebase.auth().currentUser.updateProfile({ displayName: displayName, photoURL: null})
      })
      .catch((error: any) => {
        return firebase.Promise.reject(error);
      }));
  }

  signinUser(email: string, password: string): Promise<any> {
    return (<Promise<any>> firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res: any) => {        
        return firebase.auth().currentUser.getToken();
      })
      .then((token: string) => {
        this.user = {
          displayName: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email,
          token: token
        };        
      })
      .catch((error: any) => {
        this.resetUser();
        return firebase.Promise.reject(error);
      }));
  }

  logout(): Promise<any> {
    return <Promise<any>> firebase.auth().signOut().then(() => {
      this.resetUser();
    })
    .catch((error: any) => {
      this.resetUser();
    });
  }

  getToken(): string {
    (<Promise<string>> firebase.auth().currentUser.getToken().then((token: string) => {
        this.user = {
          displayName: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email,
          token: token
        };
        return this.user.token;
      })
      .catch((error: any) => {
        this.resetUser();
        return firebase.Promise.reject(error);
      }));
    return this.user.token;
  }

  isAuthenticated() {
    return this.user.token !== '';
  }

  getDisplayName(): string {
    return this.user.displayName;
  }

  private resetUser() {
    this.user = {
      displayName: '',
      email: '',
      token: ''
    };
  }
}
