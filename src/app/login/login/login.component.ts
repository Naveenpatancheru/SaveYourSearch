import { User } from './../../common/models/user';
import { UserService } from './../../common/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService,  } from './../../common/services/alert.service';

import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';  
import { Socialusers } from './../../common/models/socialusers';
import { SocialloginService } from './../../common/services/socialLogin.service';





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
  socialusers=new Socialusers();  
  response;
  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService,
    public OAuth: AuthService,  
    private SocialloginService: SocialloginService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
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
  public socialSignIn(socialProvider: string) {  
    let socialPlatformProvider;  
    if (socialProvider === 'facebook') {  
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
    } else if (socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    }  
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log(socialProvider, socialusers);  
      console.log(socialusers);  
      localStorage.setItem('token', socialusers.authToken);
      localStorage.setItem('LoggedUser', socialusers.email);
      localStorage.setItem('UserFBUrl', socialusers.photoUrl);
      localStorage.setItem('UserName', socialusers.name);
      this.Savesresponse(this.socialusers);  
    });  
  }  

  Savesresponse(socialusers: Socialusers) {  
    this.router.navigate([`/home`],{relativeTo:this.route}); 
    // this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {  
    //   debugger;  
    //   console.log(res);  
    //   this.socialusers=res;  
    //   this.response = res.userDetail;  
    //   localStorage.setItem('socialusers', JSON.stringify( this.socialusers));  
    //   console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));  
    //   this.router.navigate([`/home`],{relativeTo:this.route});  
    // })  
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
      if(this.user.usernamePhoneRegistration!="InValid")
        {
          localStorage.setItem('token', this.user.token)
          localStorage.setItem('LoggedUser', this.user.usernamePhoneRegistration)
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
