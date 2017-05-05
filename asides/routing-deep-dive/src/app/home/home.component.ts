import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "app/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServersPage(id: number) {
    const extras = {
      relativeTo: this.activatedRoute,
      queryParams: { allowEdit: '1' },
      fragment: 'loading'
    }
    this.router.navigate(['servers', id, 'edit'], extras).then((result: Boolean) => {
      console.log(`Successfully navigated to 'Servers' page: ${result}`);
    });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
