import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RestService {

  private host = 'http://localhost:1337/';
  constructor(private http: Http) {
  }

  post(url: string, body: object) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({ headers: headers });
    const data = JSON.stringify(body);
    return this.http.post(this.host + url, data, requestOptions)
      .catch(this.handleError);
  }

  private handleError(error: any){
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
    return Observable.throw(errMsg);
  }
}
