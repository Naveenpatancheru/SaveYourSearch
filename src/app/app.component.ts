import { Component } from '@angular/core';
import { faSave,faCloud,faBookmark,faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SaveYourSearch';
  faSave = faSave;
  faCloud= faCloud;
  faImage=faImage;
  faBookmark=faBookmark;
}
