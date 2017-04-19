import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServersPage(id: number) {
    const extras = {
      queryParams: { allowEdit: '1' },
      fragment: 'loading'
    }
    this.router.navigate(['/servers', id, 'edit'], extras).then((result: Boolean) => {
      console.log(`Successfully navigated to 'Servers' page: ${result}`);
    });
  }
}
