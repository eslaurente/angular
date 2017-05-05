import { Injectable } from '@angular/core';

export class LoggingService {

  constructor() { }

  logStatusChanged(name: string, status: string) {
    console.log(`A service status changed | name: ${name} | status: ${status}`);
  }

}
