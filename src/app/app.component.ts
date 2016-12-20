import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle_menu: boolean = false;

  constructor() {}

  activeMenu(event) {
    document.querySelector('.menu-top').classList.toggle('menu-top-click');
    document.querySelector('.menu-middle').classList.toggle('menu-middle-click');
    document.querySelector('.menu-bottom').classList.toggle('menu-bottom-click');
    if (this.toggle_menu) {
      document.getElementById('navbar-mobile').style.top = '-17px';
      this.toggle_menu = false;
    } else {
      document.getElementById('navbar-mobile').style.top = '112px';
      this.toggle_menu = true;
    }
    event.preventDefault();
  }

}
