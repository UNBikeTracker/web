import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RestService {

  private url = 'http://bike-backend.herokuapp.com/';
  private postUser: string = this.url + 'auth/signup';
  constructor(private http: Http) {
  }

  postLogin(body: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.postUser, body, requestOptions )
      .catch(this.handleError);
  }

  private handleError(error: any){
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}}` : 'Server Error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
