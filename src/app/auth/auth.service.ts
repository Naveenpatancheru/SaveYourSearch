import { User } from './../common/models/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // private loggedIn = new BehaviorSubject<boolean>(false);
  // get isLoggedIn() {
  //   return this.loggedIn.asObservable(); // {2}
  // }
  constructor( private router: Router) { }
  login(user: User){
    if (user.usernamePhoneRegistration !== '' && user.passwordRegistration !== '' ) { // {3}
     // this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }
  logoutUser()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  logout() {                            // {4}
  //  this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
  loggedIn(){
    debugger;
    return !!localStorage.getItem('token')
  }
}
