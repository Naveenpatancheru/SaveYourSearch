import { NoteService } from './../common/services/notes.service';
import { note,noteClass } from './../common/models/note';
import { Component, OnInit,Inject } from '@angular/core';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-addnewnotes',
  templateUrl: './addnewnotes.component.html',
  styleUrls: ['./addnewnotes.component.css']
})
export class AddnewnotesComponent implements OnInit {
 noteClass= new noteClass();
  notesForm: FormGroup;
  constructor(private noteService:NoteService) { }
  faStickyNote=faStickyNote;
  noteSaveResult:boolean;
  ngOnInit() {
    this.notesForm = new FormGroup({
      noteHeadline: new FormControl(''),
      noteInformation: new FormControl(''),
    });
  }
  btnAddNewNotes()
  {
  
   
  this.noteClass.noteId="0020";
  this.noteClass.noteHeadLine=this.notesForm.value.noteHeadline;
  this.noteClass.notesInfo=this.notesForm.value.noteInformation;
  this.noteClass.createdDate="Testing";
  this.noteClass.moreInfo="MoreInfo";
  this.noteClass.bufferColumn="BufferColumn";
  this.noteService.saveNoteInfo(this.noteClass).subscribe(saveSuccessful => {
    this.noteSaveResult = saveSuccessful;
  });
  }

}
