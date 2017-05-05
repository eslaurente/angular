import { Component } from '@angular/core';

import { AccountService } from "app/services/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {

  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe((status: string) => console.info(`New status ${status}`));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
