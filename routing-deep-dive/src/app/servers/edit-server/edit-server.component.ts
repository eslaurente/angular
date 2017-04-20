import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CanComponentDeactivate } from "app/servers/edit-server/can-deactivate-guard.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(Number(this.route.snapshot.params['id']));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.allowEdit = Boolean(this.route.snapshot.queryParams['allowEdit']);    
    
    // For reactive programming, Observables:
    this.route.queryParams.subscribe((qParams: Params) => {
      this.allowEdit = Boolean(qParams['allowEdit']);
    });
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(Number(params['id']));
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
    // this.route.fragment.subscribe();
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if (!this.changesSaved && (this.serverName !== this.server.name || this.serverStatus !== this.server.status)) {
      return confirm('Do you want to discard the changes?');
    }
    else {
      return true;
    }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
