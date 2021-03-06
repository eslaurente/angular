import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from "app/server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe(
      (servers: any[]) => console.log('onSave()', servers),
      (error: any) => console.error(error)
    );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => {
        servers.forEach((server: any) => {
          server.name = (<string>server.name).replace('FETCHED_FROM:_', '');
        });
        this.servers = servers;
      },
      (error: any) => console.error(error)
    );
      
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
