import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { ServersService } from "app/servers/servers.service";

interface IServer {
  id: number,
  name: string,
  status: string
};

@Injectable()
export class ServerResolver implements Resolve<IServer> {
  
  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IServer | Observable<IServer> | Promise<IServer> {
    const id = Number(route.params['id']);
    return this.serversService.getServer(id);
  }
}
