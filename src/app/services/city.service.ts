import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CityService {
  url_server: string = 'http://dev69.local/api/location/city69.json';

  constructor(private http: Http) {
    this.init();
  }

  init() {
    return this.http.get(this.url_server).subscribe(
      res => {
        console.log('JSON: ', res.json());
      }
    );
  }

}
