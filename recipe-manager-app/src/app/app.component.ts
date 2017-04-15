import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Manager App';
  currentPage: string = 'recipes';

  onPageSelected(pageSelected: string) {
    this.currentPage = pageSelected;
  }
}
