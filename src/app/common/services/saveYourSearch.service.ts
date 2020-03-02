import { ImagePostRequest } from './../models/ImagePostRequest';
import { Headers, Http, RequestOptions, RequestMethod } from '@angular/http';
import { Injectable,InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { SavedImage } from '../models/savedImage';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
@Injectable()
export class SaveYourSearch{
    private originUrl: string;
    private headers: Headers;
    constructor(private http:Http){
        this.originUrl = "https://localhost:44316/api/Images";
        this.headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
        this.headers.append('Access-Control-Allow-Origin' , '*');
        this.headers.append('Accept', 'application/json');
        this.headers.append('Origin','http://localhost:44316');
    }
    
    public saveImage(imagePostRequest: ImagePostRequest): Observable<boolean> {
       debugger;
       
        // // return this.http.post('${this.originUrl}/api/images', imagePostRequest)
        // //     .pipe(map(response => {
        // //         return response.ok;
        // //     }));
        //  this.http.get(this.originUrl, {headers: this.headers});
        //  return ;
        const options = {responseType: 'text'};
        var headerOptions= new Headers({'Content-Type': 'application/json; charset=utf-8'});
        var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
         return this.http.post('https://localhost:44316/api/Images', imagePostRequest,requestOptions
          )
            .pipe(map(response => {
                return response.ok;
            }));
            
            // .catch(this.handleError);
    }
    public getImages(userId: string): Observable<SavedImage[]> {
        debugger;
        userId="NaveenPatancheru";
        return this.http.get(`https://localhost:44316/api/images/${userId}`)
            .pipe(map(images => {
                return images.json() as SavedImage[];
            }));
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

