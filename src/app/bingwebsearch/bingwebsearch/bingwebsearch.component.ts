import { BingWebSearchResponse, value } from './../../common/models/bingWebSearchResponse';
import { Component, OnInit } from '@angular/core';
import { CognitiveServices } from '../../common/services/cognitive.service';
import {BingWebSearchServices} from '../../common/services/bingWebSearch.service';
import { BingSearchResponse } from '../../common/models/bingSearchResponse';
import { Headers, Http } from '@angular/http';
import { map } from "rxjs/operators";
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-bingwebsearch',
  templateUrl: './bingwebsearch.component.html',
  styleUrls: ['./bingwebsearch.component.css']
})
export class BingwebsearchComponent implements OnInit {
  webSearchResults: BingWebSearchResponse | null;
  urlInfo: value | null;
  currentItemSaved: boolean;
  constructor(private bingWebSearchService: BingWebSearchServices,private http: Http) { }

  ngOnInit() {
  }
  webSearch(serachItem:string){

this.webSearchResults=null;
this.bingWebSearchService.searchWeb(serachItem).subscribe(result => {

  this.webSearchResults = result;
  console.log(this.webSearchResults);
})



// this.bingWebSearchService.searchWeb(serachItem).subscribe(result => {
//   debugger;
//   console.log(result);
//     this.webSearchResults = result;
//     console.log(result);
//   })


// this.webSearchResults=null;
//   return this.http.get(`https://localhost:44388/api/WebSearch/${serachItem}`)
//   .pipe(map(images => {
//       return images.json() ;
  
//   }));




// this.cognitiveService.searchImages(searchTerm).subscribe(result => {
//   this.searchResults = result.value;
//   this.isSearching = false;
// });



  }

  saveUrlInfo(urlInfo : value){
   
    urlInfo.userid= localStorage.getItem('LoggedUser');
    urlInfo.id=uuid();

this.bingWebSearchService.saveUrlInfo(urlInfo).subscribe(saveSuccessful => {
  this.currentItemSaved = saveSuccessful;
});
    // this.webSearchResults=null;
    // this.bingWebSearchService.searchWeb(serachItem).subscribe(result => {
    // debugger;
    
    //   this.webSearchResults = result;
    //   console.log(this.webSearchResults);
    // })
  }
}
