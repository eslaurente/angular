import { Injectable } from '@angular/core';
import {Headers, Response,  Http} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://udemy-ng-http-3e84d.firebaseio.com/data.json', servers, { headers })
      .map((response: Response) => {
        const data: any[] = response.json();
        return data;
      });
  }

  getServers(): Observable<any[]> {
    return this.http.get('https://udemy-ng-http-3e84d.firebaseio.com/data.json')
      .map((response: Response) => {
        const data: any[] = response.json();
        for (const server of data) {
          server.name = `FETCHED_FROM:_${server.name}`;
        }
        return data; // map() will wrap 'data' in a new Observable
      });
  }
}
