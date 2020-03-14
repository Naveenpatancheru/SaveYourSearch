import { note } from './../common/models/note';
import { Component, OnInit } from '@angular/core';
import {NoteService} from '../common/services/notes.service';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor(private noteService:NoteService,private router: Router) { }
  urlInfo : note[]|null=null;
  faStickyNote=faStickyNote;
  ngOnInit():void {
  
    this.noteService.getNoteInfo('NaveenPatancheru').subscribe( result=>{
      this.urlInfo=result;
    }
    
    );
    console.log(this.urlInfo);
  }


  btnAddNewNotes= function () {
    this.router.navigateByUrl('/addnewnotes');
};
}
