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
  }
  get f() { return this.loginForm.controls; }

//   onSubmit() {
//     this.submitted = true;

//     // reset alerts on submit

//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//         return;
//     }

//     this.loading = true;
//     // this.authenticationService.login(this.f.username.value, this.f.password.value)
//     //     .pipe(first())
//     //     .subscribe(
//     //         data => {
//     //             this.router.navigate([this.returnUrl]);
//     //         },
//     //         error => {
//     //             this.alertService.error(error);
//     //             this.loading = false;
//     //         });
// }

onSubmit(buttonType): void {
  if(buttonType==="Login") {
    this.submitted = true;
      this.userService.login(this.loginForm.value).subscribe( result=>{
        this.user=result;
       // console.log(this.loginResult);
      });
      this.alertService.clear();
      // debugger;
      // // this.router.navigateByUrl('/home');
      // this.router.navigateByUrl('/home');
      if(this.user.token=="Valid")
        {
        // this.router.navigateByUrl('/home');
        this.router.navigate(['/home'],{relativeTo:this.route});
        this.invalidUser=false;
        }
        else
        {
         
          // Need to 
          this.invalidUser=true;
          //tell the password is incorret
          this.alertService.error("The Username or password is incorrect");
        
        }
      
  }
  if(buttonType==="Register"){
    debugger;
    this.submittedResgiter = true;
    this.userService.sendOTP(this.loginForm.value.usernamePhoneRegistration).subscribe( result=>{
      this.OTP=result;
    });
    
   
    //  this.userService.register(this.loginForm.value)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //               //  this.alertService.success('Registration successful', true);
    //                // this.router.navigate(['/login']);
    //             },
    //             error => {
    //              //   this.alertService.error(error);
    //               //  this.loading = false;
    //             });
    
      // console.log(buttonType)
  }
  if(buttonType==="OK"){
    if(this.OTP==this.loginForm.value.OTP)
    {
    
      this.userService.register(this.loginForm.value).subscribe(saveSuccessful => {
        this.result = saveSuccessful;
      });
    }else{
      
   
  }
  }

}

}
