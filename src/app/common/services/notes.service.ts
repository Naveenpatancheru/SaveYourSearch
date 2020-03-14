import { note } from './../models/note';
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
        return this.http.get(`https://localhost:44388/api/Notes/${urlInfo}`)
    .pipe(
        map(images => {
        return images.json() as note[] ;
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