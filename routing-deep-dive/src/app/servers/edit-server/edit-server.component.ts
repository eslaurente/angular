import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private route: ActivatedRoute, private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(Number(this.route.snapshot.params['id']));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log(this.route);
    
    // For reactive programming, Observables:
    this.route.queryParamMap.subscribe((paramsMap: Params) => {
      console.log(paramsMap);
      
      this.allowEdit = paramsMap['allowEdit'];
    });
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(Number(params['id']));
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
    // this.route.fragment.subscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
