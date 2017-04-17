import { Component, Input } from '@angular/core';
import { LoggingService } from "app/logging.service";
import { AccountService } from "app/account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService: LoggingService, private accountService: AccountService) {

  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.logginService.logStatusChanged(this.account.name, status);
  }
}
