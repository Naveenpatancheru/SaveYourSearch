import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './common/services/user.service';
import { Component, OnInit } from '@angular/core';
import { faSave,faCloud,faBookmark,faImage } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
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
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  submittedResgiter = false;
  returnUrl: string;
  result:boolean;
  OTP:string;
  loginResult:string;
  constructor(  ) { }
    
 
  
}
