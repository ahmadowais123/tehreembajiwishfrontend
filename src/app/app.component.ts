import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tehreem-baji-wish';

  showMain: boolean = false;

  handleAuthenticated(event) {
    this.showMain = true
  }

}
