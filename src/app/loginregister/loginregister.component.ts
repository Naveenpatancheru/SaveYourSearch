import { User } from './../common/models/user';
import { UserService } from './../common/services/user.service';
import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  submittedResgiter = false;
  returnUrl: string;
  result:boolean;
  OTP:string;
  loginResult:string;
  user:User;
  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      usernamePhoneRegistration: ['', Validators.required],
      passwordRegistration: ['', [Validators.required, Validators.minLength(6)]],
      OTP: ['',''],
      token:['','']
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit(buttonType): void {
    if(buttonType==="Login") {
      this.submitted = true;
        console.log(buttonType)
        this.userService.login(this.loginForm.value).subscribe( result=>{
          this.user=result;
        });
        if(this.user.username!=null || this.user.username!="")
        {
        // this.router.navigateByUrl('/home');
        this.router.navigate(['/home'],{relativeTo:this.route});
        }
        else
        {
          // Need to tell the password is incorret
          console.log("IncorrectPasword");
          return;
        }
        
    }
    if(buttonType==="Register"){
      debugger;
      this.submittedResgiter = true;
      this.userService.sendOTP(this.loginForm.value.usernamePhoneRegistration).subscribe( result=>{
        this.OTP=result;
        console.log(this.OTP);
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
        debugger;
        this.userService.register(this.loginForm.value).subscribe(saveSuccessful => {
          this.result = saveSuccessful;
        });
      }else{
        debugger;
     
    }
    }
  
  }
}
