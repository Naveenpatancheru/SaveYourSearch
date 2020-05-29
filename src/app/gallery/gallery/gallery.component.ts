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
   loggedInUser:string;
  ngOnInit(): void {
    this.loggedInUser=localStorage.getItem('LoggedUser');

    this.saveYourSearch.getImages( this.loggedInUser).subscribe(images =>{
   this.savedImages=images;
    });
  }

}
