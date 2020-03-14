import { Component, OnInit } from '@angular/core';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-addnewnotes',
  templateUrl: './addnewnotes.component.html',
  styleUrls: ['./addnewnotes.component.css']
})
export class AddnewnotesComponent implements OnInit {

  constructor() { }
  faStickyNote=faStickyNote;
  ngOnInit() {
  }

}
