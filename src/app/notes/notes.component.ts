import { note } from './../common/models/note';
import { Component, OnInit } from '@angular/core';
import {NoteService} from '../common/services/notes.service';
// import { faStickyNote,faEdit} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor(private noteService:NoteService,private router: Router) { }
  urlInfo : note[]|null=null;
  noteUpdateResult:boolean;
  notesInfo:string;
  notesHeadLine:string
  // faStickyNote=faStickyNote;
  // faEdit=faEdit;
  ngOnInit():void {

    var loggedInUser = localStorage.getItem('LoggedUser');
    this.noteService.getNoteInfo(loggedInUser).subscribe( result=>{
      this.urlInfo=result;
    }
    
    );
    console.log(this.urlInfo);
  }


  btnAddNewNotes(noteInfo : note) {
    debugger;
   // this.router.navigateByUrl('/addnewnotes');

   this.noteService.updateNoteInfo(noteInfo).subscribe(saveSuccessful => {
    this.noteUpdateResult = saveSuccessful;
  });
};
}
