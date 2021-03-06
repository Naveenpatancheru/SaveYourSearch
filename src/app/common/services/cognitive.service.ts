import { BingSearchResponse } from './../models/bingSearchResponse';
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
export class CognitiveServices{
  bingSearchAPIKey = '640a9ec0bfd94d58b05425ff73df78bf';
   //bingSearchAPIKey = 'ab983a21caee47d9b63c108a67e2b5e5';
    computerVisionAPIKey='1565277a930e467782ba20dd7f7b8d9a';
  //  computerVisionAPIKey='db96df6834f0400c8972360572ea9937';
    constructor(private http: AzureHttpClient) { }

    // For getting the Bing Search images 
    searchImages(searchTerm: string): Observable<BingSearchResponse> {
        
        // return this.http.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${'+searchTerm+"'}", this.bingSearchAPIKey)
        //     .pipe(map(response => response.json() as BingSearchResponse));
         
            return this.http.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${'+searchTerm+"'}", this.bingSearchAPIKey)
            .pipe(map(response => response.json() as BingSearchResponse));


    }

    // For analyzing the searched images
    analyzeImage(request: ComputerVisionRequest): Observable<ComputerVisionResponse> {
      

        
        // return this.http.post('https://imagedetectionbingai.cognitiveservices.azure.com/vision/v2.0/analyze?visualFeatures=Description,Tags', this.computerVisionAPIKey, request)
        // .pipe(map(response => response.json() as ComputerVisionResponse))

        // return this.http.post('https://westus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Description,Tags', this.computerVisionAPIKey, request)
        //     .pipe(map(response => response.json() as ComputerVisionResponse))

return this.http.post('https://imagedetectionbing.cognitiveservices.azure.com/vision/v2.0/analyze?visualFeatures=Description,Tags', this.computerVisionAPIKey, request)
            .pipe(map(response => response.json() as ComputerVisionResponse))
            // .catch(this.handleError);
    }



    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
