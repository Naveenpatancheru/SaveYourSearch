import { NoteService } from './../common/services/notes.service';
import { note,noteClass } from './../common/models/note';
import { Component, OnInit,Inject } from '@angular/core';
// import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-addnewnotes',
  templateUrl: './addnewnotes.component.html',
  styleUrls: ['./addnewnotes.component.css']
})
export class AddnewnotesComponent implements OnInit {
 noteClass= new noteClass();
  notesForm: FormGroup;
  constructor(private noteService:NoteService) { }
  // faStickyNote=faStickyNote;
  noteSaveResult:boolean;
  ngOnInit() {
    this.notesForm = new FormGroup({
      noteHeadline: new FormControl(''),
      noteInformation: new FormControl(''),
    });
  }
  btnAddNewNotes()
  {
  debugger;
   
  this.noteClass.noteId=uuid();
  this.noteClass.noteHeadLine=this.notesForm.value.noteHeadline;
  this.noteClass.notesInfo=this.notesForm.value.noteInformation;
  this.noteClass.createdDate="Testing4/15";
  this.noteClass.moreInfo="MoreInfo";
  this.noteClass.bufferColumn=localStorage.getItem('LoggedUser');
  this.noteService.saveNoteInfo(this.noteClass).subscribe(saveSuccessful => {
    this.noteSaveResult = saveSuccessful;
  });
  }


}
