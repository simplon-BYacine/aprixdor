import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.scss']
})
export class AssuranceComponent implements OnInit {
  tab_sprite: any[] = [];

  constructor() {
    for (let i = 1; i < 16; i++) {
      this.tab_sprite.push('sprite-assu sprite-assu-icon' + i);
    }
  }

  ngOnInit() {
  }

}
