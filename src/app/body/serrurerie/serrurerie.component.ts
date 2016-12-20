import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

@Component({
  selector: 'app-serrurerie',
  templateUrl: './serrurerie.component.html',
  styleUrls: ['./serrurerie.component.css']
})
export class SerrurerieComponent implements OnInit {

  constructor(private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach( (params: Params) => {
      console.log('Params: ', params['service']);
    });
  }

}
