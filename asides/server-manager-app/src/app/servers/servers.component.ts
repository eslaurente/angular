import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName: string = '';
  servers: string[] = ['HelloKitty', 'Gohan'];

  constructor() {
  }

  ngOnInit() {
  }

  onInputChange($event: any) {
    this.serverCreated = false;
    if ((<HTMLInputElement>$event.target).value === '') {
      this.allowNewServer = false;
    }
    else {
      this.allowNewServer = true;
    }
  }

  onCreateServer($event: any) {
    this.servers.push(this.serverName);
    this.serverCreated = true;   
    this.serverCreationStatus = `${this.serverName} was created!`;
  }

  onClear($event: any) {
    this.serverName = '';
    this.allowNewServer = false;
  }
}
