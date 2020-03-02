import { SaveYourSearch } from './../../common/services/saveYourSearch.service';
import { Component, OnInit } from '@angular/core';
import { SavedImage } from '../../common/models/savedImage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private saveYourSearch :SaveYourSearch) { }
  savedImages: SavedImage[] | null = null;
  ngOnInit(): void {
    debugger;
    this.saveYourSearch.getImages("NaveenPatancheru").subscribe(images =>{
   this.savedImages=images;
    });
  }

}
