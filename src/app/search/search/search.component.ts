import { ImagePostRequest } from './../../common/models/ImagePostRequest';
import { SaveYourSearch } from './../../common/services/saveYourSearch.service';
import { Component, OnInit } from '@angular/core';
import { CognitiveServices } from '../../common/services/cognitive.service';
 import { ImageResult } from '../../common/models/bingSearchResponse';
 import { ComputerVisionRequest, ComputerVisionResponse } from '../../common/models/computerVisionResponse';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: ImageResult[] | null;
   isSearching = false;
   currentAnalytics: ComputerVisionResponse | null;
   currentItem: ImageResult | null;
   isAnalyzing = false;
   currentItemSaved: boolean;
   constructor(private cognitiveService: CognitiveServices,private saveYourSearch: SaveYourSearch) { }

  ngOnInit() {
  }

  // Search for the Image
  search(searchTerm: string) {
    this.searchResults = null;
    this.currentAnalytics = null;
    this.isSearching = true;
    this.cognitiveService.searchImages(searchTerm).subscribe(result => {
        this.searchResults = result.value;
        this.isSearching = false;
    });
}

 // Analyze the image
analyze(result: ImageResult) {
  this.currentItem = result;
  this.currentAnalytics = null;
  this.currentItemSaved = false;
  this.isAnalyzing = true;
  this.cognitiveService.analyzeImage({ url: result.thumbnailUrl } as ComputerVisionRequest).subscribe(result => {
      this.currentAnalytics = result;
      this.isAnalyzing = false;
  });
  window.scroll(0, 0);
  
}
saveImage() {
  let transferObject = {
      userId :"NaveenPatancheru",
      url: this.currentItem.thumbnailUrl,
      encodingFormat: this.currentItem.encodingFormat,
      id: this.currentItem.imageId,
      description: this.currentAnalytics.description.captions[0].text,
      tags: this.currentAnalytics.tags.map(tag => tag.name)
  }
  this.saveYourSearch.saveImage(transferObject).subscribe(saveSuccessful => {
      this.currentItemSaved = saveSuccessful;
  });
}
}
