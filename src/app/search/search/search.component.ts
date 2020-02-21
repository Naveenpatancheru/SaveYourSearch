import { Component, OnInit } from '@angular/core';
import { CognitiveServices } from '../../common/services/cognitive.service';
 import { ImageResult } from '../../common/models/bingSearchResponse';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: ImageResult[] | null;
   isSearching = false;
   constructor(private cognitiveService: CognitiveServices) { }

  ngOnInit() {
  }
  search(searchTerm: string) {
    this.searchResults = null;
    this.isSearching = true;
    this.cognitiveService.searchImages(searchTerm).subscribe(result => {
        this.searchResults = result.value;
        this.isSearching = false;
    });
}
}
