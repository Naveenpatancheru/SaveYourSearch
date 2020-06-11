import { HttpClient } from '@angular/common/http';
import { DashBoard } from './../models/dashBoard';
import { map, catchError } from "rxjs/operators";
import { AzureHttpClient } from './azureHttpClient';
import { Headers, Http,RequestOptions, RequestMethod  } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashBoardService{
constructor(private http: Http) { }

getDashBoardInfo(urlInfo :string) :Observable<DashBoard>
{
        return this.http.get(`https://localhost:44349/api/DashBoard/${urlInfo}`)
    .pipe(
        map(images => {
        return images.json() as DashBoard ;
                     }
            ),catchError(this.handleError)
        );
}
private handleError(error: any): Promise<any> {
  
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}

}