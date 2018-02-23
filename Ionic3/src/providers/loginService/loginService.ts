import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//export class Operator {
//  Phone: string;
//  Companies: any;

//  //constructor(phone: string, company: any) {
//  //  this.phone = phone;
//  //  this.company = company;
//  //}

//  constructor(values: Object = {}) {
//    Object.assign(this, values);
//  }

//}

@Injectable()
export class LoginService {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }
  public apiUrl ='http://localhost:63941/api/login' //'http://trandatatech.net/WebApi/api/login';


  //extractData(res) :Operator {
  //  if (res === null) {
  //    return null;
  //  }
  //  //var json = res.json();
  //  //alert(json);
  //  //return json;
  //  this.operator = new Operator(res);    
  //  localStorage.setItem('operator', JSON.stringify(this.operator));
  //  return this.operator;
  //}

  //async tryLogin(phone, password) {
  //  //var data = { phone: phone, password: password };
  //  let apiUrl = this.apiUrl + "/" + phone + "/" + password;
  //  return this.http.get(apiUrl);
  //  //let apiUrl = this.apiUrl;
  //  //this.http.post(apiUrl, data);
  //  //return await this.http.post(apiUrl, data);
  //}

  //tryLoginNoAsync(phone, password) {
  //  //var data = { phone: phone, password: password };
  //  //let apiUrl = this.apiUrl;
  //  //this.http.post(apiUrl, data);
  //  let apiUrl = this.apiUrl + "/" + phone + "/" + password;
  //  return this.http.get(apiUrl);
  //}


  login(phone, password) {

    //var data = { phone: phone, password: password };
    let apiUrl = this.apiUrl + "/" + phone + "/" + password;
    return this.http.get(apiUrl).toPromise();
    //  .then(function (res): Operator {
    //  return new Operator(res);
    //});
    //return this.http.get(apiUrl)
    //  .map(oper => {
    //    return new Operator(oper);
    //  })
    //  .catch((err) => {
    //    console.error(err);
    //  });

    //return this.http.post(this.apiUrl, data).map(result => { return this.operator });


    //return Observable.create(observer => {
    //  this.http.get(this.apiUrl).subscribe(res =>
    //    res.map(this.extractData));
    //});
  }
}
