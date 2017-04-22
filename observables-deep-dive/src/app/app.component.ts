import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/user/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = true;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userActivated.subscribe((id: number) => {
      this.user1Activated = id === 1 ? true : false;
      this.user2Activated = id === 2 ? true : false;
    });
  }
}
