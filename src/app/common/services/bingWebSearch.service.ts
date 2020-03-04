import { BingWebSearchResponse } from './../models/bingWebSearchResponse';
import { BingwebsearchComponent } from './../../bingwebsearch/bingwebsearch/bingwebsearch.component';

import { AzureHttpClient } from './azureHttpClient';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpModule } from '@angular/http';
import { ComputerVisionRequest, ComputerVisionResponse } from '../models/computerVisionResponse';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
@Injectable()
export class BingWebSearchServices{
    bingSearchAPIKey = '640a9ec0bfd94d58b05425ff73df78bf';
    computerVisionAPIKey='1565277a930e467782ba20dd7f7b8d9a';
    bingWebSearchAPIKey = '2097b581f59b420082726c89a81f36e6';
    bingWebSearchResponse : BingWebSearchResponse |null;
    constructor(private http: Http) { }

    // For getting the Bing Search images 
    searchWeb(searchTerm: string): Observable<BingWebSearchResponse> {
        debugger;
        // return this.http.get('https://api.cognitive.microsoft.com/bing/v7.0/search?q=${'+searchTerm+"'}", this.bingWebSearchAPIKey)
        //     .pipe(map(response => response.json() ));

           // .catch(this.handleError);
        
            return this.http.get(`https://localhost:44388/api/WebSearch/${searchTerm}`)
            .pipe(map(images => {
                return images.json() as BingWebSearchResponse ;
            
            }));
             
            
            };
           
    }



    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
//}
