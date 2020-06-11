import { note,noteClass } from './../models/note';
import { BingWebSearchResponse, value } from './../models/bingWebSearchResponse';
import { BingwebsearchComponent } from './../../bingwebsearch/bingwebsearch/bingwebsearch.component';
import { map, catchError } from "rxjs/operators";
import { AzureHttpClient } from './azureHttpClient';
import { Headers, Http,RequestOptions, RequestMethod  } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpModule } from '@angular/http';
import { ComputerVisionRequest, ComputerVisionResponse } from '../models/computerVisionResponse';
@Injectable()
export class NoteService{
    bingSearchAPIKey = '640a9ec0bfd94d58b05425ff73df78bf';
    computerVisionAPIKey='1565277a930e467782ba20dd7f7b8d9a';
    bingWebSearchAPIKey = '2097b581f59b420082726c89a81f36e6';
    bingWebSearchResponse : BingWebSearchResponse |null;
    constructor(private http: Http) { }
    getNoteInfo(urlInfo :string) :Observable<note[]>
    {
        debugger;
        return this.http.get(`https://localhost:44349/api/Notes/${urlInfo}`)
    .pipe(
        map(images => {
        return images.json() as note[] ;
                     }
            ),catchError(this.handleError)
        );
    }
    public saveNoteInfo(noteInfo :noteClass):Observable<boolean>
    {
        const options = {responseType: 'text'};
        var headerOptions= new Headers({'Content-Type': 'application/json; charset=utf-8'});
        var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
        //  return this.http.post('https://saveyoursearchapi.azurewebsites.net/api/Notes', noteInfo,requestOptions
        //   )
         return this.http.post('https://localhost:44349/api/Notes', noteInfo,requestOptions
          )
            .pipe(map(response => {
                return response.ok;
            }));
    }
    public updateNoteInfo(noteInfo :noteClass):Observable<boolean>
    {
        debugger;
        const options = {responseType: 'text'};
        var headerOptions= new Headers({'Content-Type': 'application/json; charset=utf-8'});
        var requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});
         return this.http.put('https://saveyoursearchapi.azurewebsites.net/api/Notes', noteInfo,requestOptions
          )
            .pipe(map(response => {
                return response.ok;
            }));
    }
    private handleError(error: any): Promise<any> {
        debugger
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}