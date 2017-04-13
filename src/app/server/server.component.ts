import { Component, OnInit } from '@angular/core';

enum ServerStatus{
  ONLINE,
  OFFLINE
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: green;
    }
    .offline {
      color: maroon;
    }
  `]
})
export class ServerComponent implements OnInit {
  private MIN: number = 0;
  private MAX: number = 99999;
  private STATUS = {
    0: 'ONLINE',
    1: 'OFFLINE'
  }
  serverId: number = 10;
  serverStatus: ServerStatus = ServerStatus.OFFLINE;


  constructor() {
    this.serverId = Math.floor(Math.random() * (this.MAX - this.MIN)) + this.MIN;
    this.serverStatus = this.serverId % 2 === 0 ? ServerStatus.ONLINE : ServerStatus.OFFLINE;
  }

  ngOnInit(): void {
      
  }

  getServerStatus(): string {
      return this.STATUS[this.serverStatus];
  }

  getColor(): string {
    return this.isOnline() ? 'lightgreen' : 'salmon';
  }

  isOnline(): boolean {
    return this.serverStatus === ServerStatus.ONLINE;
  }
}