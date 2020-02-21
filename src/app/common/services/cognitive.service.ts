import { BingSearchResponse } from './../models/bingSearchResponse';
import { AzureHttpClient } from './azureHttpClient';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpModule } from '@angular/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
@Injectable()
export class CognitiveServices{
    bingSearchAPIKey = '640a9ec0bfd94d58b05425ff73df78bf';
    constructor(private http: AzureHttpClient) { }
    searchImages(searchTerm: string): Observable<BingSearchResponse> {
        debugger;
        return this.http.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${'+searchTerm+"'}", this.bingSearchAPIKey)
            .pipe(map(response => response.json() as BingSearchResponse));
            //.catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
