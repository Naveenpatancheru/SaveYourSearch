import { User } from './../models/user';

import { map, catchError } from "rxjs/operators";
import { Headers, Http,RequestOptions, RequestMethod  } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { User } from '../models/user';
@Injectable()
export class UserService{
    constructor(private http: Http) { }
    register(user: User) :Observable<boolean>{
        debugger;
        const options = {responseType: 'text'};
        var headerOptions= new Headers({'Content-Type': 'application/json; charset=utf-8'});
        var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
         return this.http.post('https://localhost:44349/api/UserRegistration', user,requestOptions
          )
            .pipe(map(response => {
                return response.ok;
            }));
    }
    login(user: User):Observable<User>{
        
        //  return this.http.get(`https://localhost:44349/api/UserRegistration/${user}`)
        //  .pipe(
        //     map(images => {
        //     return images.json() as string ;
        //                  }
        //         ),catchError(this.handleError)
        //     );
        debugger;
        const options = {responseType: 'text'};
        var headerOptions= new Headers({'Content-Type': 'application/json; charset=utf-8'});
        var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
         return this.http.post('https://localhost:44349/api/UserLogin', user,requestOptions
          )
            .pipe(map(response => {
                return response.json() as User;
                debugger;
                console.log(User);
            }));
        
    }
    sendOTP(PhoneNumber: string) :Observable<string>{
        debugger;
        const options = {responseType: 'text'};
        var headerOptions= new Headers({'Content-Type': 'application/json; charset=utf-8'});
        var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
         return this.http.get(`https://localhost:44349/api/Twilio/${PhoneNumber}`)
         .pipe(
            map(images => {
            return images.json() as string ;
                         }
                ),catchError(this.handleError)
            );
}
private handleError(error: any): Promise<any> {
    debugger
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}
}