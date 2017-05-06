import { Injectable } from '@angular/core';
import {Response, Http} from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]): Observable<Response> {
    return this.http.post('https://udemy-ng-http-3e84d.firebaseio.com/.json', servers);
  }

}
