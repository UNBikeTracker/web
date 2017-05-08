import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RestService {

  ipHost: string = 'localhost';
  urlPostLogin: string = 'http://'+this.ipHost+':8000/user';
  constructor(private http: Http){
  }

  postLogin(body: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.urlPostLogin, body, requestOptions )
      .catch(this.handleError)
  }

  private handleError(error: any){
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}}` : 'Server Error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
