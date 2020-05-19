import { User } from './../../common/models/user';
import { UserService } from './../../common/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService,  } from './../../common/services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  submittedResgiter = false;
  returnUrl: string;
  result:boolean;
  OTP:string;
  loginResult:string;
  user:User;
  invalidUser:boolean;
  showRegisterBtn:boolean;
  showOTPMessage:boolean;
  showDivOTP:boolean;
  showOTPErrorMessage:boolean;
  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['DefaultUN', Validators.required],
      password: ['DefaultPD', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      usernamePhoneRegistration: ['', Validators.required],
      passwordRegistration: ['', [Validators.required, Validators.minLength(6)]],
      OTP: ['',''],
      token:['TestingToken',''],
      id:['TestingID','']
  });
  this.showRegisterBtn=true;
  this.showDivOTP=false;
  this.showOTPMessage=false;
  }
  get f() { return this.loginForm.controls; }

onSubmit(buttonType): void {
  if(buttonType==="Login") {
    this.submitted = true;
      this.userService.login(this.loginForm.value).subscribe( result=>{
        this.user=result;
      });
      this.alertService.clear();
   
      // // this.router.navigateByUrl('/home');
      // this.router.navigateByUrl('/home');
      if(this.user.id=="Naveen12121")
        {
          localStorage.setItem('token', this.user.token)
        // this.router.navigateByUrl('/home');
        this.router.navigate(['/home'],{relativeTo:this.route});
        this.invalidUser=false;
      //  localStorage.setItem('clickCounter', "loggedIn");
        }
        else
        {
          this.invalidUser=true;
        }
  }
  if(buttonType==="Register"){
 
    this.submittedResgiter = true;
    this.userService.sendOTP(this.loginForm.value.usernamePhoneRegistration).subscribe( result=>{
      this.OTP=result;
      this.showDivOTP=true;
      this.showRegisterBtn=false;
      this.showOTPMessage=true;
      this.showOTPErrorMessage=false;
    });
  }
  if(buttonType==="OK"){
    if(this.OTP==this.loginForm.value.OTP)
    {
      this.userService.register(this.loginForm.value).subscribe(saveSuccessful => {
        this.result = saveSuccessful;
        this.router.navigate(['/home'],{relativeTo:this.route});
      });
    }else{
      this.showOTPErrorMessage=true;
      this.showOTPMessage=false;
  }
  }

}

}
